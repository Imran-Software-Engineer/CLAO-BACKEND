const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

// Route to create a new job
/**
 * @swagger
 * /jobs:
 *   post:
 *     summary: Create a new job
 *     description: Create a new delayed job to fetch a random Unsplash image. The job execution time is random, between 5 seconds and 5 minutes.
 *     responses:
 *       201:
 *         description: Job created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 jobId:
 *                   type: string
 *                   description: The unique ID of the created job.
 *       500:
 *         description: Internal Server Error
 */
router.post("/", jobController.createJob);

// Route to get all jobs
/**
 * @swagger
 * /jobs:
 *   get:
 *     summary: Get all jobs
 *     description: Retrieve a list of all jobs. Resolved jobs will return their results (the image URL), and pending jobs will only return their status.
 *     responses:
 *       200:
 *         description: List of jobs retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: The unique ID of the job.
 *                   status:
 *                     type: string
 *                     description: The current status of the job (pending or resolved).
 *                   result:
 *                     type: string
 *                     description: The result of the job, which is the image URL (only available if the job is resolved).
 *       500:
 *         description: Internal Server Error
 */
router.get("/", jobController.getAllJobs);

// Route to get a job by its ID
/**
 * @swagger
 * /jobs/{id}:
 *   get:
 *     summary: Get a specific job by ID
 *     description: Retrieve a specific job by its ID. The response will include the status (pending or resolved) and the result if the job is resolved.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the job.
 *     responses:
 *       200:
 *         description: Job retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   description: The unique ID of the job.
 *                 status:
 *                   type: string
 *                   description: The current status of the job (pending or resolved).
 *                 result:
 *                   type: string
 *                   description: The result of the job, which is the image URL (only available if the job is resolved).
 *       404:
 *         description: Job not found
 *       500:
 *         description: Internal Server Error
 */
router.get("/:id", jobController.getJobById);

module.exports = router;
