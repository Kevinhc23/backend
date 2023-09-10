import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { encryptPass } from "../../lib/encrypt-pass";

const prisma = new PrismaClient();

export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const { password } = req.body;
    const hash = encryptPass(password);

    const user = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: hash,
      },
    });
    res.status(200).json(user);
  } catch (e) {
    console.log("Error: ", e);
    res.status(404).json({ error: "User not found" });
  }
};
