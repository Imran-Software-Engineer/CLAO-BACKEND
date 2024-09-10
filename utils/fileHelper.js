const fs = require("fs");
const path = require("path");
// const filePath = "../data/jobs.json";

const filePath = path.join(__dirname, "../db/jobs.json");

// Ensure the directory exists
const ensureDirectoryExistence = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDirectoryExistence(filePath); // Ensure the directory exists

exports.loadJobsFromFile = () => {
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

exports.saveJobsToFile = (jobs) => {
  ensureDirectoryExistence(filePath); // Ensure the directory exists
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2), "utf-8");
};
