import express from "express";
import cors from "cors";

import noteRoutes from "./routers/notes.routes.js";
import { connectDb } from "./config/db.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use((req, res, next) => {
  console.log(`Req method ${req.method} url ${req.url}`);
  next();
});

app.use("/api/notes", noteRoutes);

connectDb().then(() => {
  app.listen(5001, () => {
    console.log("Server is running on port 5001");
  });
});
