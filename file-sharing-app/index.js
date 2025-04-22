const express = require('express');
const PORT = 5010;
const app = express();
const fileRouter = require('./routes/fileRoutes');

app.use('/api/files', fileRouter);

app.listen(PORT, (err)=>{
    if(err) console.log("Error Listitning to the server", err);

    console.log(`Listening to server at ${PORT}`);
})