const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
PORT = process.env.PORT || 5002;

//middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//routes
const userRoutes = require("./src/users/user.routes");
app.use("/api/users", userRoutes);

const main = async () => {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => res.send("App is working"));
};

main()
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(`Error found ${err}`));

app.listen(PORT, () => console.log(`Port ${PORT} is connected`));
