const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 1337;

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://asherazali121823:ali121823@cluster0.yzsrcdh.mongodb.net/';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected");
});

const carhireRouter = require("./routes/carhire");
const userRouter = require("./routes/users");
const loginRouter = require("./routes/login");

app.use("/carhire", carhireRouter);
app.use("/users", userRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log("Server is running");
});
