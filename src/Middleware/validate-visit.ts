import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const validateVisitor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cedula, department, date, visitComments, visitPurpose } = req.body;
  const parsedCedula = parseInt(cedula);

  const visitor = await prisma.visitor.findUnique({
    where: {
      cedula: parsedCedula,
    },
  });

  if (visitor) {
    try {
      const createVisit = await prisma.visit.create({
        data: {
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          visitComments,
          visitPurpose,
          visitStatus: "Pendiente",
          visitor: {
            connect: {
              cedula: visitor.cedula,
            },
          },
          department: {
            connect: {
              id: department,
            },
          },
        },
      });
      res.status(200).json(createVisit);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  next();
};
