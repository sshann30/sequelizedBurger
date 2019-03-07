
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
      res.render("index", { burgers: data });
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      burger_name: req.body.BurgerName,
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
     
        res.json(err);
      });
  });

  // DELETE route for deleting Burgers. We can get the id of the Burger to be deleted from
  // req.params.id
  app.delete("/api/Burgers/:id", function(req, res) {
    // We just have to specify which Burger we want to destroy with "where"
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    });

  });

  // PUT route for updating Burgers. We can get the updated Burger data from req.body
  app.put("/api/Burgers", function(req, res) {

    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Burger.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbBurger) {
      res.json(dbBurger);
    })
      .catch(function(err) {
      // Whenever a validation or flag fails, an error is thrown
      // We can "catch" the error to prevent it from being "thrown", which could crash our node app
        res.json(err);
      });
  });
};
