import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const validateUser = async (req: Request, res:  Response, next: NextFunction) => {
  const { email } = req.body;

  const userExists = await prisma.user.findUnique({
    where: {
        email: email,
    },
  });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  next();
};
