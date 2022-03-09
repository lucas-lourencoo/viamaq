import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function Machine(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const result = await prisma.machine.findFirst({
        where: { id: req.query.id.toString() },
      });
      return res.json(result);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (err: any) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
