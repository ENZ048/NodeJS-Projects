const expess = require('express');
const logger = require('./logger');
const app = expess();

app.use(logger);

app.get('/', (req, res) => {
    res.send("Home Page");
});

app.get('/contact-us', (req, res) => {
    res.send("Contact Us Page");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});