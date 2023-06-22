import express from "express";
import httpStatus from "http-status";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();
app.use(cors())
app.use(express.jason())
app.use(router)
const port = process.env.PORT || 5000;

app.get("/health", (req, res) => res.sendStatus(httpStatus.OK));

app.listen(port, () => {
  console.log(`Server is up and runnin or port: ${port}`);
})