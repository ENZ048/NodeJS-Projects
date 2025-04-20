const jobModel = require('../models/jobModel');

const createJob = async (req, res)=> {
    try{
        let jobObj = req.body;
        await jobModel.create(jobObj);
        res.status(200).json({
            success:true,
            message:"Job created successfully"
        });
    }
    catch(err){
        console.log("Error while creating the job", err);
    }
}

const fetchJobs = async (req, res)=> {
    try{
        const jobList = await jobModel.find();

        res.status(200).json({
            success:true,
            message:"Jobs fetched successfully",
            data: jobList
        })
    }
    catch(error){
        console.log("Error while fetching Jobs", error);
    }
    
}

const updateJob = async (req, res)=> {
    try{
        let id = req.query.id;
        let feildToUpdate = req.body;

        await jobModel.findByIdAndUpdate(id, feildToUpdate);

        res.status(200).json({
            success:true,
            message:"Job updated successfully"
        })
    }
    catch(error){
        console.log('Error Updating the job', error);
    }
}

const deleteJob =  (req, res)=> {
    res.status(200).json({
        success:true,
        message:"Job deleted successfully"
    })
}

module.exports = {createJob, fetchJobs, updateJob, deleteJob}