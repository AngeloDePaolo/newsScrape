//initializing express routing
var router = require("express").Router();
//require API routes
var apiRoutes = require("./api");
//build HTML routes
var viewRoutes = require("./view");

//gives API route information: a name in your router
router.use("/api", apiRoutes);
//gives handlebars information a name in your router
router.use("/", viewRoutes);

//
module.exports = router