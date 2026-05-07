import { useEffect, useState } from "react";
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
        console.error("Error fetching items:", err);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">MarginMate Inventory</h1>

      {items.length === 0 ? (
        <p>No items yet...</p>
      ) : (
        items.map((item) => (
          <div key={item._id} className="card mb-3 p-3">
            <h5>{item.itemName}</h5>
            <p>Category: {item.category}</p>
            <p>Profit: ${item.profit}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
