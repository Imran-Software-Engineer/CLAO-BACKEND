// swaggerDefinition.js
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Job Service API",
    version: "1.0.0",
    description:
      "This API allows the management of delayed jobs for fetching random images from Unsplash.",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}/api`,
      description: "Development server",
    },
  ],
};

module.exports = swaggerDefinition;
