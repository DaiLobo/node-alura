import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose.connect(
  "mongodb+srv://diana:q0o2Shw4eoRbjeiP@cluster0.ywsm6th.mongodb.net/data-study-node"
);

let db = mongoose.connection;

export default db;
