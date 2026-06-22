const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Server is running successfully!");
});

// Sample API Route
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Node.js and Express.js",
    status: "success",
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});