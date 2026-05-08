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
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>MarginMate Dashboard</h1>

      {items.length === 0 ? (
        <p>Loading data...</p>
      ) : (
        items.map((item) => (
          <div key={item._id} style={{ marginBottom: "10px" }}>
            <strong>{item.itemName}</strong> - {item.category} - Profit: $
            {item.profit}
          </div>
        ))
      )}
    </div>
  );
}

export default App;
