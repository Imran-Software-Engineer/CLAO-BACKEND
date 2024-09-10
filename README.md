# Job Task

This project implements a job scheduler system with delayed execution for retrieving random Unsplash images from the food category. The job execution time ranges from 5 seconds to 5 minutes, with 5-second steps. The system consists of two parts:

Backend (Server): Handles job creation, job status management, and WebSocket-based notifications.
Frontend (React + Tailwind): Displays the job list, allows users to create new jobs, and shows job results when resolved.

# Features

## Backend:

    Create new jobs via POST API.
    Retrieve job status and results via GET API.
    WebSocket notifications when a job is resolved.

## Frontend:

    View all jobs with status and image result.
    Create a new job.
    Real-time update for job status using WebSocket.
    View job details by clicking on a job item.

## Prerequisites

    Make sure you have the following installed on your machine:

    Node.js (v14.x or later)
    npm
    Git
    Unsplash API Key (for backend image retrieval)

# Instructions for Running the Server (Backend)

    1. Navigate to the Server Directory
        cd server
    2. Install Dependencies
        npm install
    3. Start the Backend Server
        node server.js

    The server will run on http://localhost:5000.

## API Endpoints:

    POST /jobs: Creates a new job and returns the job ID.
    GET /jobs: Fetches a list of all jobs with their status and result (if resolved).
    GET /jobs/{jobId}: Fetches the details of a specific job by its ID.

## WebSocket URL:

    ws://localhost:5000 (used for real-time notifications of job updates)

# Instructions for Running the Frontend (React)

    1. Navigate to the Frontend Directory
        cd frontend
        cd job-app
    2. Install Dependencies
        npm install
    3. Start the Frontend Development Server
        npm start

    The frontend will be accessible at http://localhost:3000.

# How to Use the Application

## 1. Creating a Job:

    Navigate to http://localhost:3000.
    On the main page, click the Create Job button to create a new job.
    A new job will be added to the list with the status pending.

## 2. Viewing Job Status:

    All created jobs will be listed under the Job Task section.
    Each job card will display the job image (when resolved), job ID, and the status (pending or resolved).
    Jobs will automatically update to resolved once they retrieve the image from Unsplash.

## 3. Job Details:

    Click on any job card to view the detailed page for that specific job, which will include the job's image, ID, and status.

# WebSocket Real-Time Updates

    The frontend uses WebSocket to receive real-time updates about job statuses. Once a job's status changes to resolved, the corresponding job card will update automatically without requiring a page refresh.

# Total Time Spent

## Time Spent On Backend

    Initial setup and project structure: 1 hour
    Implementing job service logic: 1.5 hours
    WebSocket implementation for real-time updates: 1.5 hour
    Swagger documentation setup: 1.5 hour
    Testing and debugging: 30 mints

## Time Spent On Frontend

    Initial setup and project structure: 30 mints
    Make Pages: 2 hour
    API's Integration: 1 hour
    Testing and debugging: 30 mints
