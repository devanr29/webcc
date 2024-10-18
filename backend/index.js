// backend/index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/data', (req, res) => {
  res.json({ message: 'API Data' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
