const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5050;

app.listen(port, () => {
  console.log(`Server ${port} is live`);
});