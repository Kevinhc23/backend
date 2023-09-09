import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { email } = req.params;
        const user = await prisma.user.delete({
            where: {
                email: email,
            },
        });
        res.status(200).json(user);
        console.log(user);
    } catch (e) {
        console.log('Error: ', e);
        res.status(404).json({ error: "User not found" });
    }
}
