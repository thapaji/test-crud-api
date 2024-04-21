import express from "express";
import morgan from "morgan";
import cors from "cors";
import { conectMongo } from "./src/config/mongoDBConfig.js";

import formRouter from "./src/routers/FormRouter.js";

/*   initialize the api application   */
const app = express();

/*   Connect to Mongo   */
const PORT = process.env.PORT || 8000;
conectMongo();

/*    MiddleWares       */
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/api/form", formRouter);

/*   run the server */
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Server running at http://localhost:${PORT}`);
});
