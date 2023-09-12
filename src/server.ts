import express from "express";
import cors from "cors";
import routes from "./Routes/routes";
import morgan from "morgan";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
