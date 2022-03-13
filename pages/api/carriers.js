import { PrismaClient } from '@prisma/client';
import _ from 'lodash';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    let data = await prisma.layers.findMany({});
    data = _.keyBy(data, (carrier) => carrier.id);
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const carriers = req.body;
    console.log(carriers, carriers[0]);
    for (let i = 0; i < carriers.length; i++) {
      await prisma.layers.update({
        where: { id: carriers[i].id },
        data: { assignedToLayer: carriers[i].assignedToLayer },
      });
    }
    res.status(202).json();
  }
}
