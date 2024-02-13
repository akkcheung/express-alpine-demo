const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.listen(PORT);
console.log(`Running on port ${PORT}`);

