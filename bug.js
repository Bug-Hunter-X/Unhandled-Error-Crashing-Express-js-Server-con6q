const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Missing error handling here
  const result = someFunctionThatMightThrowAnError();
  res.send(result);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someFunctionThatMightThrowAnError() {
  // Simulate an error
  throw new Error('Something went wrong');
}