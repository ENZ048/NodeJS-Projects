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

const fileShare = async (req, res) => {
    try{
        const fileId = req.body.id;

        let file = await fileModel.findById(fileId);

        if(!file){
            res.status(400).json({
                message: "File not found in DataBase"
            });
            return;
        }

        res.status(200).json({
            message: "File Found Successfully",
            data: `/download/${file._id}`
        });
    }
    catch(err){
        console.log("Error in sharing the file", err);
    }
   
};

const fileDownload = async (req, res) => {
    try{

        const fileId = req.params.id;

        const file = await fileModel.findById(fileId);

        if(!file){
            res.end("Invalid Id");
            return;
        }

        res.download(file.filePath, file.originalName);
    }
    catch(err){
        console.log("Error in downloading the file", err);
    }
    
};

module.exports = {fileUpload, fileShare, fileDownload};