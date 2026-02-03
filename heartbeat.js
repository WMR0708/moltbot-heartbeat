const https = require("https");

const API_KEY = process.env.MOLTBOOK_API_KEY;

const req = https.request({
  hostname: "www.moltbook.com",
  path: "/api/v1/agents/heartbeat",
  method: "POST",
  headers: {
    Authorization: "Bearer " + API_KEY
  }
}, res => {
  console.log("Heartbeat:", res.statusCode);
});

req.on("error", e => console.error(e));
req.end();
