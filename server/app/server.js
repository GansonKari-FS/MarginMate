const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data (temporary database)
let items = [
  {
    _id: "1",
    itemName: "Test Product",
    category: "Electronics",
    profit: 120,
  },
];

//  ROOT ROUTE (just to confirm server works)
app.get("/", (req, res) => {
  res.json({
    message: "MarginMate API is running",
  });
});

// GET ALL ITEMS
app.get("/api/v1/items", (req, res) => {
  res.json({
    success: true,
    data: items,
  });
});

//  CREATE ITEM
app.post("/api/v1/items", (req, res) => {
  const newItem = {
    _id: Date.now().toString(),
    itemName: req.body.itemName,
    category: req.body.category,
    profit: req.body.profit,
  };

  items.push(newItem);

  res.status(201).json({
    success: true,
    data: newItem,
  });
});

// Delete item
// DELETE ITEM
app.delete("/api/v1/items/:id", (req, res) => {
  const { id } = req.params;

  items = items.filter((item) => item._id !== id);

  res.json({
    success: true,
    message: "Item deleted",
  });
});

// PORT
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`MarginMate server is running on port ${PORT}`);
});
