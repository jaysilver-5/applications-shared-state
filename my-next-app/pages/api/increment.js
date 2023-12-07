// pages/api/increment.js
import Cors from 'cors';
import { runMiddleware } from '../../lib/init-middleware';

let counter = 0;

// Initialize the cors middleware
const cors = Cors();

export default async function handler(req, res) {
  // Run cors middleware
  await runMiddleware(req, res, cors);

  if (req.method === 'POST') {
    counter++;
    res.status(200).json({ count: counter });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
