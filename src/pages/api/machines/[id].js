import { PrismaClient } from '@prisma/client';

export default async function Machine(req, res) {
  const prisma = new PrismaClient();
  try {
    if (req.method === 'GET') {
      const result = await prisma.machine.findFirst({
        where: { id: req.query.id },
      });
      return res.json(result);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (err) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
