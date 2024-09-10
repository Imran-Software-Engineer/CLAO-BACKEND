const jobService = require("../services/jobService");

// POST /jobs: Create a new job
exports.createJob = (req, res) => {
  try {
    const jobId = jobService.createJob();
    res
      .status(201)
      .json({ id: jobId, message: "Job created successfully", code: 200 });
  } catch {
    res.status(500).json({ message: "Error while creating a job.", code: 500 });
  }
};

// GET /jobs: Get a list of jobs
exports.getAllJobs = (req, res) => {
  try {
    const jobs = jobService.getAllJobs();
    res
      .status(200)
      .json({ data: jobs, message: "All jobs fetched.", code: 200 });
  } catch {
    res
      .status(500)
      .json({ message: "Error while fetching all jobs", code: 500 });
  }
};

// GET /jobs/:id: Get job by ID
exports.getJobById = (req, res) => {
  const job = jobService.getJobById(req.params.id);
  if (job) {
    res.status(200).json({ data: job, message: "Job found.", code: 200 });
  } else {
    res.status(404).json({ message: "Job not found", code: 404 });
  }
};
