require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bookRoutes = require("./routes/bookRoutes");
const db = require("./config/db"); // kết nối MySQL

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
// app.use("/api/books", bookRoutes);

// chạy server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
