import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function getUsers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  const { text, userId } = req.body;
  const posts = await prisma.post.findMany();
  res.json(posts);

  if (req.method === "POST") {
    const post = await prisma.post.create({
      data: {
        text: text,
        userId: userId,
      },
    });
    return post;
  }
}
