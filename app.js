const express = require("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));
var faker = require('faker');

// routes
app.get("/", function(req, res) {
   res.render("index.ejs", {"fakerPhrase":faker.hacker.phrase(), 
      "fakerName":faker.name.findName()}); 
});

app.get("/assistants", function(req, res) {
   res.render("assistants.ejs", {"fakerCompany":faker.company.companyName(), 
      "fakerCatchPhrase":faker.company.catchPhrase()}); 
});

app.get("/appliances", function(req, res) {
   res.render("appliances.ejs", {"fakerCompany":faker.company.companyName(), 
      "fakerCatchPhrase":faker.company.catchPhrase()});
});

app.get("/fitness", function(req, res) {
   res.render("fitness.ejs", {"fakerCompany":faker.company.companyName(), 
      "fakerCatchPhrase":faker.company.catchPhrase()});
});

// starting server
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Express server is running..."); 
});