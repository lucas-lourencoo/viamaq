import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Piece(req: NextApiRequest, res: NextApiResponse) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const result = await prisma.piece.findMany({ take: 6 });
      return res.json(result);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (err: any) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
