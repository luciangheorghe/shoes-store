// The below code is write by Obaseki Nosa
// The original code can be found here: https://medium.com/techtrument/deploying-a-vuejs-standalone-app-to-heroku-aa95820cc49a

const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
//Create the express app
const app = express();
//create middleware to handle the serving the app
app.use("/", serveStatic(path.join(__dirname, "/public")));
//serve index by default
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
//create default port to serve the app on
const port = process.env.PORT || 5000;
app.listen(port);
//log to feedback that this is actually running
console.log("Server started on port" + port);
