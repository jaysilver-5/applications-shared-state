// shared-state-server/index.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let count = 0;

app.get('/count', (req, res) => {
  res.json({ count });
});

app.post('/increment', (req, res) => {
  const { count: newCount } = req.body;
  count = newCount;
  res.json({ count });
});

app.listen(port, () => {
  console.log(`Shared state server listening at http://localhost:${port}`);
});
