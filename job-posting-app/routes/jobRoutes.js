const express = require('express');
const router = express.Router();
const jobControllers = require('../controllers/jobController');

router.post("/create-job", jobControllers.createJob)

router.get("/jobs", jobControllers.fetchJobs)

router.put("/update-job", jobControllers.updateJob)

router.delete("/delete-job/:id", jobControllers.deleteJob)

module.exports = router;