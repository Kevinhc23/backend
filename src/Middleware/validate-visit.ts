import { PrismaClient } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

const prisma = new PrismaClient();

export const validateVisitorAndCreate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { cedula, department, visitComments, visitPurpose } = req.body;
  const parsedCedula = parseInt(cedula);

  const visitorExiste = await prisma.visitor.findUnique({
    where: {
      cedula: parsedCedula,
    },
  });

  if (visitorExiste) {
    const addDepartment = await prisma.department.create({
      data: {
        department,
      },
    });

    const createData = await prisma.visit.create({
      data: {
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        visitComments,
        visitPurpose,
        visitStatus: "Pendiente",
        visitor: {
          connect: {
            cedula: visitorExiste.cedula,
          },
        },
        department: {
          connect: {
            id: addDepartment.id,
          },
        },
      },
    });
    console.log(createData);
    res.status(200).json(createData);
  } else {
    next();
  }
};
