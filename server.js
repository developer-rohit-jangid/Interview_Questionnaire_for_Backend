const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("./models/db");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require("cors")());
app.use(require("helmet")());
app.use("/api/Order", require("./routes/Order.js"));
app.use("/api/User", require("./routes/User.js"));
// Production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
}

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
