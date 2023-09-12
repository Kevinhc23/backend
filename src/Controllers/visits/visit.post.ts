import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createVisit = async (req: Request, res: Response) => {
  try {
    const {
      name,
      cedula,
      lastname,
      department,
      visitComments,
      visitPurpose,
      visitStatus,
    } = req.body;
    const parsedCedula = parseInt(cedula);
    const visitor = await prisma.visitor.create({
      data: {
        name,
        cedula: parsedCedula,
        lastname,
      },
    });

    const createDepartment = await prisma.department.create({
      data: {
        department,
      },
    });

    const visit = await prisma.visit.create({
      data: {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        visitComments,
        visitPurpose,
        visitStatus: visitStatus,
        visitor: {
          connect: {
            cedula: visitor.cedula,
          },
        },
        department: {
          connect: {
            id: createDepartment.id,
          },
        },
      },
    });
    res.status(200).json(visit);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
};
