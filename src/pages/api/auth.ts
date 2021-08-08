import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
const KEY = "123123123";

export default async function verifyUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const { login, password } = req.body;
    const user = await prisma.user.findUnique({
      where: {
        login: login,
      },
    });

    if (!user) {
      return res.status(404).json({
        error: "User not found",
      });
    }

    if (password !== user.password) {
      return res.status(404).json({
        error: "Password incorret",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        login,
      },
      KEY
    );
    return res.send({ ...user, token });
  }
  return res.status(404).json({
    error: "Method not allowed",
  });
}
