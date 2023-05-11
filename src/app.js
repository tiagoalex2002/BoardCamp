import express from "express";
import cors from "cors";
import router from "./routes/index.routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

const port = 4000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));