import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allVisit = async (req: Request, res: Response) => {
  try {
    const visits = await prisma.visit.findMany({
      include: {
        department: true,
      },
    });
    res.status(200).json(visits);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const oneVisit = async (req: Request, res: Response) => {
  try {
    const { cedula } = req.params;
    const parsedCedula = parseInt(cedula);

    const visit = await prisma.visitor.findUnique({
      where: {
        cedula: parsedCedula,
      },
    });
    res.status(200).json(visit);
  } catch (error) {
    res.status(500).json({ error });
  }
};
