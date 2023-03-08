const express = require("express");
const multer = require("multer");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");

const upload = multer();
const app = express();

app.use(cors());
app.use(upload.none());

app.use("/api", routes);

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}.`);
});