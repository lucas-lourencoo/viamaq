import { NextApiRequest, NextApiResponse } from 'next';

export default async function Machine(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const qs = require('qs');

  try {
    if (req.method === 'GET') {
      const query = qs.stringify(
        {
          filters: {
            username: {
              $eq: 'John',
            },
          },
        },
        {
          encodeValuesOnly: true,
        }
      );

      const response = await fetch(`/api/users?${query}`);
    }

    return res.status(405).json({ message: 'Method Not Allowed' });
  } catch (err: any) {
    res.json({ message: 'Erro desconhecido', code: err.message });
  }
}
