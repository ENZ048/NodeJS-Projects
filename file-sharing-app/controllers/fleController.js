const fileUpload = (req, res) => {
    res.status(200).json({
        success: true,
        message: "File Uploaded Successfully!"
    });
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