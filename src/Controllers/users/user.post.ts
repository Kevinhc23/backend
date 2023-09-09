import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import encryptPass from "../../services/encryp-pass";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
    try{
        const { name, lastname, email, password, role } = req.body;
        const hash = encryptPass(password);
        const lowerCaseEmail = email.toLowerCase();

        const userRole = await prisma.role.create({
            data: {
                name: role,
            }
        });
        

        const user = await prisma.user.create({
            data: {
                name: name,
                lastname: lastname,
                email: lowerCaseEmail,
                password: hash,
                role: {
                    connect: {
                        id: userRole.id,
                    }
                }
            }
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error });
    }
}