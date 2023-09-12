import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const visitDelete = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const visit = await prisma.visit.delete({
      where: {
        id,
      },
    });

    res.json(visit);
  } catch (error) {
    res.json({ error: "Visit not found" });
  }
};
