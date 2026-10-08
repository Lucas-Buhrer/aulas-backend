import express from "express";
import livrosRouter from "./routes/livros-routes.js";
import logRequest from "./middlewares/log-request.js";
import userValidate from "./middlewares/user-validate-middleware.js";

const app = express();
app.use(express.json());
app.use("/livros", logRequest, userValidate,livrosRouter);

app.listen(3000);
