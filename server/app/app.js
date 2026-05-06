const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const itemRoutes = require("./routes/itemRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Base route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the MarginMate API",
    metadata: {
      hostname: req.hostname,
      method: req.method,
    },
  });
});

// Item routes
app.use("/api/v1/items", itemRoutes);

module.exports = app;
