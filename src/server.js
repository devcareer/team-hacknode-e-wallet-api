require('dotenv').config();
const express = require('express');
const db = require('../database/config');

const app = express();

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
