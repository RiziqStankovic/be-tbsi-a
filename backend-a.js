const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Backend A, Versi 1.0.0!');
});

app.listen(port, () => {
  console.log(`Backend A is running on port ${port}`);
});

// Export the 'app' object so it can be used in tests
module.exports = app;
