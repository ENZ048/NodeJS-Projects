const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    job_title: {
        type: String,
    },
    description: {
        type: String,
    },
    company_name: {
        type: String,
    },
    location: {
        type: String,
    },
    salary: {
        type: Number,
    },
})

const joModel = mongoose.model("jobModel", jobSchema);

module.exports = joModel;