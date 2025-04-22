const mongoose = require('mongoose');

const fileScehma = new mongoose.Schema({
    fileName:{
        type: String
    },
    originalName:{
        type: String
    },
    filePath:{
        type: String
    },
    size:{
        type: Number
    },
    userName:{
        type: String
    }
});

const fileModel = mongoose.model("fileModel", fileScehma);

module.exports = fileModel;