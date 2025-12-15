
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const assignmentRoutes = require("./routes/assignments");
const db = require("./db");

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/api/assignments", assignmentRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));