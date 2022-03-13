// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function fetch(req, res) {
  res.status(200).json([{ name: 'AIG' }, { name: '555' }]);
}
