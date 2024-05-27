import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import myUserRoute from "./routes/myUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Database connected successfully");
});

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
