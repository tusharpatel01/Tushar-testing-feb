import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "../config/db.js";

import userRoutes from "../routes/user.route.js";
import jobRoutes from "../routes/job.route.js";
import companyRoutes from "../routes/company.route.js";
import applicationRoutes from "../routes/application.route.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/application", applicationRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully ");
});

export default app;
