import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/items")
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);
  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Arial",
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>📊 MarginMate Dashboard</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {items.length === 0 ? (
          <p>Loading data...</p>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              style={{
                padding: "10px",
                borderBottom: "1px solid #eee",
              }}
            >
              <strong>{item.itemName}</strong> — {item.category}
              <div style={{ color: "green" }}>Profit: ${item.profit}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
