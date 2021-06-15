const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/registration", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connection is successfull");
  })
  .catch((err) => {
    console.log(err);
  });
