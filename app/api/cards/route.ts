import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  console.log('Recebendo a request')

  if(req.method == 'GET') {
    res.status(200).json({ message: "Alguns dados" })
  } else {
    res.status(500).json({ message: "Método não permitido" })
  }
}