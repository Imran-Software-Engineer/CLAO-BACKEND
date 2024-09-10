const express = require("express");
const http = require("http");
const jobRoutes = require("./routes/jobRoutes");
const { initializeWebSocket } = require("./websocket/jobWebSocket");
const setupSwaggerDocs = require("./swagger");
const cors = require("cors");

require("dotenv").config();

const app = express();
const server = http.createServer(app);

initializeWebSocket(server);

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use("/api/jobs", jobRoutes);

// Setup Swagger API documentation
setupSwaggerDocs(app);

const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
