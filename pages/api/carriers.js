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
    const promises = _.map(carriers, (carrier) => {
      return prisma.layers.update({
        where: { id: carrier.id },
        data: { assignedToLayer: carrier.assignedToLayer },
      });
    });
    await Promise.all(promises);
    res.status(202).json();
  }
}
