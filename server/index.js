const express = require('express');

const app = express();
const port = 3000;
const renderPage = require('./puppeteer/renderPage');
const htmlOptimizer = require('./htmlOptimizer');

app.get('/', async (req, res) => {
    const resultHTML = await renderPage(req.query.url);
    const optimizedHTML = htmlOptimizer(resultHTML, true);
    res.send(optimizedHTML);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
