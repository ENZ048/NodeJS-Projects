const express = require('express');
const router = require('./routes/jobRoutes');
const mongoose = require('mongoose');
const PORT = 5000;


const app = express();
app.use(express.json());
app.use("/api/v1", router);

mongoose.connect("mongodb+srv://pratikyesare68:FwCTU9uNDxoEIYfi@cluster0.gvbwons.mongodb.net/jobDB")
.then(()=> console.log('connected to mongoDB successfully'))
.catch((err) => console.log('Error connecting to mongoDB', err));

// const connectDB = async () => {
//     try{
//         await mongoose.connect("mongodb+srv://pratikyesare68:FwCTU9uNDxoEIYfi@cluster0.gvbwons.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
//         console.log('Connected to MongoDB');
//     }
//     catch(err){
//         console.error("Error Connecting to mongoDB", err);
//     }
// }


app.listen(PORT, (err)=>{
    if(err){
        console.log("error listening to the server")
    }
    else{
        console.log(`Listeining to the server at ${PORT}`);
    }
})