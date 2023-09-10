import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { visitType } from "../../../type";

const prisma = new PrismaClient();

export const createVisit = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const {
      cedula,
      name,
      departureTime,
      hour,
      purpose,
      status,
      notes,
      departmentId,
    } = req.body;
    const parsedCedula = parseInt(cedula);

    const createDepartment = await prisma.department.create({
      data: {
        department: departmentId,
      },
    });

    const visit = await prisma.visitor.create({
      data: {
        cedula: parsedCedula,
        name: name,
        departureTime: departureTime || "",
        hour: hour,
        purpose: purpose,
        status: status || false,
        notes: notes || "",
        departmentId: createDepartment.id,
      },
    });
    return res.status(200).json(visit);
  } catch (e) {
    return res.status(500).json({ error: e });
  }
};
