import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const result = await prisma.piece.findMany({});
      return res.json(result);
    } else if (req.method === 'POST') {
      const data = req.body;
      await prisma.piece.create({ data });
      return res.json(data);
    }
  } catch (err: any) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
