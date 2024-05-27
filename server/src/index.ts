import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(express.json()); // to convert incoming request to json
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
