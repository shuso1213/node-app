import express, { type Request, type Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // フロントからのリクエストを許可
app.use(express.json()); // JSON ボディを扱えるようにする

// 例: GET /api/message
app.get('/api/message', (req: Request, res: Response) => {
  res.json({ message: 'Hello from backend!' });
});

app.listen(3000, () => {
  console.log('Backend running on http://localhost:3000');
});