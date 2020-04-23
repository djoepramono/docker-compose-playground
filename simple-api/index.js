const express = require('express')
const app = express()
const port = process.env.PORT

const response = { message: "API response success" };

app.get('/', (req, res) => res.json(response));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
