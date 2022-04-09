var createError = require("http-errors");
var express = require("express");
var path = require("path");
//load the cookie-parser middleware
var cookieParser = require("cookie-parser");
var logger = require("morgan");
//load the badyParser middleware
const bodyParser = require("body-parser");
// importing routes files
const Login = require("./routes/login");
const home = require("./routes/home");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var listsRouter = require("./routes/users");
var navbar = require("./routes/navbar");
var about = require("./routes/about");
const footer = require("./routes/footer");
const contact = require("./routes/contact");
var description = require("./routes/product");
const descProduitCuisine = require("./routes/product_cuisine");
var descpc = require("./routes/description_pc");
var search = require("./routes/search");
var deleteprod = require("./routes/delete");
const deletepc = require("./routes/deletepc");
const deleteelectro = require("./routes/delete_electro");
const updatecuisine = require("./routes/update_cuisine");
const updateelectro = require("./routes/update_electro");
const updatepc = require("./routes/update_pc");
// create a new express application
var app = express();
//specifying a directory where the template files are located
app.set("views", path.join(__dirname, "views"));
// specifying the template engine that  will be used
app.set("view engine", "twig");
app.use(logger("dev"));
app.use(express.json());
// parsing incoming requests
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// middlewares
// middleware used to verify if the application is only availaible during working hours (Monday to Friday,  from 9 to 17)
const middleware = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (hour > 24 || hour < 00 || day > 6) {
    const error = new Error("THIS WEBSITE IS INACCESSIBLE NOW");
    next(error);
  } else next();
};
// error handler middleware
const errorhandler = (err, req, res, next) => {
  if (err) {
    res.send(
      "<h2 style='text-align:center'>This page is not available now</h2>"
    );
  }
};
// mounting middlewares on the app
app.use(middleware);
app.use(errorhandler);
// mounting routes on the app
app.use("/", Login);
app.use("/login", Login);
app.use("/users", usersRouter);
app.use("/products", home);
app.use("/navbar", navbar);
app.use("/about", about);
app.use("/footer", footer);
app.use("/contact", contact);
app.use("/product", description);
app.use("/prodcuisine", descProduitCuisine);
app.use("/prod_pc", descpc);
app.use("/search", search);
app.use("/delete", deleteprod);
app.use("/deletepc", deletepc);
app.use("/delete_electro", deleteelectro);
app.use("/update", updatecuisine);
app.use("/update_electro", updateelectro);
app.use("/update_pc", updatepc);
app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
