const https = require("https");

const API_KEY = process.env.MOLTBOOK_API_KEY;

if (!API_KEY) {
  console.log("Missing MOLTBOOK_API_KEY");
  process.exit(1);
}

const req = https.request(
  {
    hostname: "www.moltbook.com",
    path: "/api/v1/agents/status",
    method: "GET",
    headers: {
      Authorization: "Bearer " + API_KEY,
      Accept: "application/json"
    }
  },
  (res) => {
    let body = "";
    res.on("data", (c) => (body += c));
    res.on("end", () => {
      console.log("Status:", res.statusCode);
      console.log(body.slice(0, 300));
    });
  }
);

req.on("error", (e) => console.error("Error:", e.message));
req.end();
