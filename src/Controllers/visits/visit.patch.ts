import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const visitState = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { visitStatus } = req.body;

  try {
    const visit = await prisma.visit.update({
      where: {
        id: id,
      },
      data: {
        visitStatus: visitStatus,
      },
    });

    res.status(200).json(visit);
  } catch (error) {
    res.status(404).json({ error: "State not Change" });
  }
};
