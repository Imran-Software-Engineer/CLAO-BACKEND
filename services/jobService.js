const { v4: uuidv4 } = require("uuid");
const fileHelper = require("../utils/fileHelper");
const axios = require("axios");
const { broadcastJobUpdate } = require("../websocket/jobWebSocket");

let jobs = fileHelper.loadJobsFromFile(); // Load jobs from file

// Generate random delay in steps of 5 seconds, between 5 and 300 seconds
const randomDelay = () => {
  const steps = Math.floor(Math.random() * 60) + 1; // 1 to 60 steps
  return steps * 5000; // Return delay in milliseconds
};

// Create a new job and simulate delayed execution
exports.createJob = () => {
  const jobId = uuidv4();
  const job = { id: jobId, status: "pending", result: null };
  jobs.push(job);
  fileHelper.saveJobsToFile(jobs);

  let randomDelayForSetTimeout = randomDelay();

  // Simulate delayed job execution
  setTimeout(async () => {
    try {
      const imageUrl = await fetchRandomUnsplashImage();
      job.status = "resolved";
      job.result = imageUrl;
      fileHelper.saveJobsToFile(jobs);
      //   Notify WebSocket clients when job is resolved
      broadcastJobUpdate({
        id: jobId,
        status: job.status,
        result: job.result,
      });
    } catch (error) {
      console.error("Error in setTimeout callback:", error);
    }
  }, randomDelayForSetTimeout);

  return jobId;
};

// Retrieve all jobs
exports.getAllJobs = () => {
  return jobs.map((job) => ({
    id: job.id,
    status: job.status,
    result: job.status === "resolved" ? job.result : null,
  }));
};

// Retrieve a job by ID
exports.getJobById = (jobId) => {
  return jobs.find((job) => job.id === jobId);
};

// Fetch random image from Unsplash
const fetchRandomUnsplashImage = async () => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random/?client_id=${process.env.ACCESS_KEY_UNSPLASH}&page=1&query=food&per_page=1`
    );

    return response?.data?.urls?.full;
  } catch (error) {
    console.error("Error fetching Unsplash image", error);
    return null;
  }
};
