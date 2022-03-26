var createError = require("http-errors");
var express = require("express");
var path = require("path");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const bodyParser = require("body-parser");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var listsRouter = require("./routes/produc_electro");
var navbar = require("./routes/navbar");
var about = require("./routes/about");
const footer = require("./routes/footer");
const contact = require("./routes/contact");
var description = require("./routes/product");
const descProduitCuisine = require("./routes/product_cuisine");
var descpc = require("./routes/description_pc");
var search = require("./routes/search");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const middleware = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  const day = date.getDay();
  if (hour > 24 || hour < 9 || day > 6) {
    const error = new Error("THIS WEBSITE IS INACCESSIBLE NOW");
    next(error);
  } else next();
};
const errorhandler = (err, req, res, next) => {
  if (err) {
    res.send(
      "<h2 style='text-align:center'>This page is not available now</h2>"
    );
  }
};
app.use(middleware);
app.use(errorhandler);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/products", listsRouter);
app.use("/navbar", navbar);
app.use("/about", about);
app.use("/footer", footer);
app.use("/contact", contact);
app.use("/product", description);
app.use("/prodcuisine", descProduitCuisine);
app.use("/prod_pc", descpc);
app.use("/search", search);
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
//middlewares

module.exports = app;
