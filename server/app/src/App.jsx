import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/items")
      .then((res) => {
        setItems(res.data.data || []);
      })
      .catch((err) => {
        console.error("Error fetching items:", err);
      });
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>MarginMate Inventory</h1>
      <p>Your reseller profit tracker is live.</p>

      {items.length === 0 ? (
        <p>No items yet...</p>
      ) : (
        items.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "10px",
              borderRadius: "8px",
            }}
          >
            <h3>{item.itemName}</h3>
            <p>Category: {item.category}</p>
            <p>Profit: ${item.profit}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
