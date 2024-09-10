const WebSocket = require("ws");
const clients = new Set();

let wss;

exports.initializeWebSocket = (server) => {
  wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    clients.add(ws);

    ws.on("close", () => {
      clients.delete(ws);
    });
  });
};

exports.broadcastJobUpdate = (job) => {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(job));
    }
  });
};
