const fileModel = require('../models/fileModel');

const fileUpload = async (req, res) => {
    try{
        await fileModel.create({
            fileName : req.file.filename,
            originalName: req.file.originalname,
            filePath: req.file.path,
            size: req.file.size,
            userName: "pratik@gmail.com"
        })
        res.status(200).json({
            success: true,
            message: "File Uploaded Successfully!"
        });
    }
    catch(err){
        console.log("Error in Uploading the file.", err);
    }
   
};

const fileShare = (req, res) => {
    res.status(200).json({
        success: true,
        message: "File Shared Successfully!"
    });
};

const fileDownload = (req, res) => {
    res.status(200).json({
        success: true,
        message: "File Downloaded Successfully!"
    });
};

module.exports = {fileUpload, fileShare, fileDownload};