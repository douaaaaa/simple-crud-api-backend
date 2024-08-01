import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import router from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/products", router);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`this server is runnig on the port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
