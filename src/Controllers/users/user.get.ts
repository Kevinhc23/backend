import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const allUser = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany({
            include: {
                role: true,
            }
        });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error });
    }
}

export const oneUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
            include: {
                role: true,
            }
        });
        res.status(200).json(user);
    } catch (e) {
        console.log('Error: ', e);
        res.status(404).json({ error: "User not found" });
    }
}
