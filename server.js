var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// new req
require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  