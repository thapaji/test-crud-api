import mongoose from "mongoose";

export const conectMongo = () => {
  const uri = "mongodb://localhost:27017/crud_test_api";
  mongoose
    .connect(uri)
    .then(() => console.log("DB connected"))
    .catch((error) => console.log(error));
};
