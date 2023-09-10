import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { comparePass } from "../../lib/encrypt-pass";
import { createToken } from "../../Middleware/jwt";

const prisma = new PrismaClient();

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const lowerCaseEmail = email.toLowerCase();

    const user = await prisma.user.findUnique({
      where: {
        email: lowerCaseEmail,
      },
      include: {
        role: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const validPassword = comparePass(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = createToken(user);
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error en la autenticación:", error);
    res.status(500).json({ message: "Error en la autenticación" });
  }
};
