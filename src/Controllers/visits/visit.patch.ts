import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateStatusVisit = async (req: Request, res: Response) => {
  try {
    const { cedula } = req.params;
    const { status } = req.body;
    const parsedCedula = parseInt(cedula);

    const visit = await prisma.visitor.update({
      where: {
        cedula: parsedCedula,
      },
      data: {
        status: status,
      },
    });
    res.status(200).json(visit);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const updateNotesVisit = async (req: Request, res: Response) => {
  try {
    const { cedula } = req.params;
    const { notes } = req.body;
    const parsedCedula = parseInt(cedula);

    const visit = await prisma.visitor.update({
      where: {
        cedula: parsedCedula,
      },
      data: {
        notes: notes,
      },
    });
    res.status(200).json(visit);
  } catch (error) {
    res.status(500).json({ error });
  }
};
