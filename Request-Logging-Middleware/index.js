const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/contact-us', (req, res) => {
    res.send('Contact Us Page')
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})