import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData = new FormData();
      formData.append('image', req.body);

      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        res.status(200).json(data);
      } else {
        res.status(500).json({ message: 'Image upload failed' });
      }
    } catch (error) {
      console.error('Image upload failed:', error);
      res.status(500).json({ message: 'Image upload failed' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
