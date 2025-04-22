const express = require('express');
const PORT = 5010;
const app = express();
const fileRouter = require('./routes/fileRoutes');
const mongoose = require('mongoose');

app.use(express.json());
app.use('/', fileRouter);

mongoose.connect('mongodb+srv://PratikYesare:HtxkzFVXze5U0xgr@file-sharing-app.y6u5dbl.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing-app/fileStorage')
.then(()=> console.log("Connected to DB Sucessfully!"))
.catch((err)=>console.log("Error connecting to DB!", err));

app.listen(PORT, (err)=>{
    if(err) console.log("Error Listitning to the server", err);

    console.log(`Listening to server at ${PORT}`);
})