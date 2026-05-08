import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    itemName: "",
    category: "",
    profit: "",
  });

  // GET items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://localhost:3000/api/v1/items")
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => console.error(err));
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // POST item
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/items", form)
      .then(() => {
        fetchItems(); // refresh list
        setForm({ itemName: "", category: "", profit: "" });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>📊 MarginMate Dashboard</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="itemName"
          placeholder="Item Name"
          value={form.itemName}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
        />
        <input
          name="profit"
          placeholder="Profit"
          value={form.profit}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>

      {/* LIST */}
      {items.map((item) => (
        <div key={item._id}>
          <strong>{item.itemName}</strong> - {item.category} - ${item.profit}
        </div>
      ))}
    </div>
  );
}

export default App;
