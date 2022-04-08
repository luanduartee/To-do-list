const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://root:jesuse100@todolist.supr9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDG Atlas CONECTADO!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
