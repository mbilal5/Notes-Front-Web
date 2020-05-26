const express = require('express');
const app = express();

app.use(express.static('static'));

app.listen(8080, () => console.log('listening on port http://localhost:8080'));
