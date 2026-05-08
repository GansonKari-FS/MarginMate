import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({
    itemName: "",
    category: "",
    profit: "",
  });

  const fetchItems = () => {
    axios
      .get("http://localhost:3000/api/v1/items")
      .then((res) => setItems(res.data.data || []))
      .catch((err) => console.error("Error fetching items:", err));
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/v1/items", form)
      .then(() => {
        fetchItems();
        setForm({ itemName: "", category: "", profit: "" });
      })
      .catch((err) => console.error("Error adding item:", err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/api/v1/items/${id}`)
      .then(() => fetchItems())
      .catch((err) => console.error("Error deleting item:", err));
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>📊 MarginMate</h1>
        <p style={subtitleStyle}>Reseller profit tracker</p>

        <div style={bannerStyle}>
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
            alt="Money and business dashboard banner"
            style={bannerImgStyle}
          />
        </div>

        <form onSubmit={handleSubmit} style={formStyle}>
          <input
            name="itemName"
            placeholder="📦 Item Name"
            value={form.itemName}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="category"
            placeholder="🏷️ Category"
            value={form.category}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            name="profit"
            placeholder="💰 Profit"
            value={form.profit}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <button type="submit" style={addButtonStyle}>
            Add Item
          </button>
        </form>

        <h2 style={sectionTitleStyle}>Inventory</h2>

        {items.length === 0 ? (
          <p style={{ color: "#777" }}>No items yet...</p>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              style={itemCardStyle}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <div>
                <strong>{item.itemName}</strong>
                <p style={itemTextStyle}>Category: {item.category}</p>
                <p style={profitStyle}>Profit: ${item.profit}</p>
              </div>

              <button
                onClick={() => handleDelete(item._id)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background:
    "radial-gradient(circle at 20% 20%, #00ffd5 0%, transparent 25%), radial-gradient(circle at 80% 30%, #7c00ff 0%, transparent 25%), linear-gradient(135deg, #0f172a, #1e293b)",
  padding: "40px",
  fontFamily: "Arial, sans-serif",
};

const cardStyle = {
  maxWidth: "760px",
  margin: "0 auto",
  background: "white",
  padding: "30px",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "5px",
  color: "#1f8f4d",
};

const subtitleStyle = {
  textAlign: "center",
  color: "#555",
  marginBottom: "20px",
};

const bannerStyle = {
  marginTop: "15px",
  marginBottom: "25px",
  borderRadius: "12px",
  overflow: "hidden",
};

const bannerImgStyle = {
  width: "100%",
  height: "160px",
  objectFit: "cover",
};

const formStyle = {
  display: "grid",
  gap: "10px",
  marginBottom: "30px",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

const addButtonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#1f8f4d",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

const sectionTitleStyle = {
  textAlign: "center",
  marginBottom: "18px",
};

const itemCardStyle = {
  border: "1px solid #ddd",
  padding: "16px",
  borderRadius: "12px",
  marginBottom: "12px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  transition: "0.2s",
  background: "#fff",
};

const itemTextStyle = {
  margin: "5px 0",
  color: "#555",
};

const profitStyle = {
  margin: 0,
  color: "green",
  fontWeight: "bold",
};

const deleteButtonStyle = {
  background: "#e74c3c",
  color: "white",
  border: "none",
  padding: "8px 12px",
  borderRadius: "8px",
  cursor: "pointer",
};

export default App;
