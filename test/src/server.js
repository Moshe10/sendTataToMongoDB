const express = require('express');
const app = express();
const path = require('path');

let p = path.join(__dirname, 'picture/');
app.use(express.static(path.resolve(p)));

app.listen(3008); 