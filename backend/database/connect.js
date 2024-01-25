import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/Student_Management")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((e) => {
    console.log(e);
  });

export default mongoose;
