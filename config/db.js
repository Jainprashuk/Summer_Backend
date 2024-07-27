const mongoose = require("mongoose")

let uri = "mongodb+srv://jainprashuk:1234@cluster0.8zj5bmi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let dbURL = uri
dbURL = dbURL.replace("<username>", process.env.DB_USERNAME)
dbURL = dbURL.replace("<password>", process.env.DB_PASSWORD)
dbURL = dbURL.replace("<dbname>", process.env.DB_NAME)

mongoose.connect(uri).then(() => {
    console.log("      ------------- DB Connected -------------");
  }).catch((err) => {
    console.log("DB Connection failed\n");
    console.log(err);
  })