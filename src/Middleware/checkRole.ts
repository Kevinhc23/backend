import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const checkRole = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const checkUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      role: true,
      email: true,
    },
  });

  if (checkUser && checkUser.role.name === "RECEPCION") {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
};
