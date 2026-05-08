const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.json({
    message: "MarginMate API is running 🚀",
  });
});

// test items route
app.get("/api/v1/items", (req, res) => {
  res.json({
    success: true,
    data: [
      {
        _id: "1",
        itemName: "Test Product",
        category: "Electronics",
        profit: 120,
      },
      {
        _id: "2",
        itemName: "Sneaker Flip",
        category: "Resale",
        profit: 85,
      },
    ],
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`MarginMate server is running on port ${PORT}`);
});
