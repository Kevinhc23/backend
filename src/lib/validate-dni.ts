import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const validateDni = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cedula } = req.body;
  const parsedCedula = parseInt(cedula);

  const userExists = await prisma.visitor.findUnique({
    where: {
      cedula: parsedCedula,
    },
  });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  next();
};
