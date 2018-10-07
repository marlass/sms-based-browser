const express = require('express');

const app = express();
const port = 3000;
const renderPage = require('./puppeteer/renderPage');

app.get('/', async (req, res) => {
    const resultHTML = await renderPage(req.query.url);
    res.send(resultHTML);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
