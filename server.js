const app = require("./app");
const mongoose = require("mongoose");
const DB_HOST =
  "mongodb+srv://Olena:9qrDF8S5gGY6B0y6@cluster0.q7krt80.mongodb.net/db_contacts?retryWrites=true&w=majority";
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
