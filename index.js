// index.js
const express = require('express');
const app = express();

// ルート1: /
app.get('/', (req, res) => {
  res.send('Hello Node App');
});

// ルート2: /about
app.get('/about', (req, res) => {
  res.send('About this app');
});

// ルート3: /api/users
app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Shun' },
    { id: 2, name: 'Alice' }
  ]);
});

// サーバー起動
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});