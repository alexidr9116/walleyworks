const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// api routers

const auth = require("./routes/api/auth");
const channel = require("./routes/api/channel");



const app = express();
// Bodyparser middleware
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })    
);
app.use(bodyParser.json());
// DB Config
const DATABASE_CONNECTION = process.env.DATABASE_URL;
// Connect to MongoDB
const option = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family:4,
  //ssl:true,
}
/*
mongoose
  .connect(
    DATABASE_CONNECTION,
    option
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
*/
const assetFolder  = path.resolve(__dirname, './client/build/');

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/auth", auth);
app.use("/api/channel",channel);



app.use(express.static(assetFolder));

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));