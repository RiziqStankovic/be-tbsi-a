const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend B!');
});

app.listen(port, () => {
  console.log(`Backend B is running on port ${port}`);
});
