const express = require('express');
const PORT = 5010;
const app = express();

app.listen(PORT, (err)=>{
    if(err) console.log("Error Listitning to the server", err);

    console.log(`Listening to server at ${PORT}`);
})