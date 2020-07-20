const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));

// routes
app.get("/", function(req, res) {
   res.render("index.html"); 
});

app.get("/assistants", function(req, res) {
   res.render("assistants.html"); 
});

app.get("/appliances", function(req, res) {
   res.render("appliances.html"); 
});

app.get("/fitness", function(req, res) {
   res.render("fitness.html"); 
   res.render("fileToRender.ejs", {"variableName":value});
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express server is running..."); 
});