import { PrismaClient } from '@prisma/client';

export default async function (req, res) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const result = await prisma.piece.findFirst({
        where: { id: req.query.id },
      });
      return res.json(result);
    }
  } catch (err) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
