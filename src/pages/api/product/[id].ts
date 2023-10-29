import { NextApiRequest, NextApiResponse } from 'next'
import products from '../../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query

  if (!id) return

  const product = products.find((product) => product.id === +id)

  res.status(200).json(product)
}
