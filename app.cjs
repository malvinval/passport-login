// import express
const express = require("express");

// initialize express app
const app = express();

// import express flash
const flash = require("express-flash");

// import passport package
const passport = require("passport");

// import express session package
const session = require("express-session");

// import passport middleware
const initPassport = require("./middlewares/passport.cjs");

// middleware passport.js
app.use(initPassport);

// middleware for parsing application/json in request body
app.use(express.json());
 
// middleware for parsing application/x-www-form-urlencoded in request body
app.use(express.urlencoded({ extended: true }));

// // middleware for using flash
app.use(flash());

// middleware for using session from passport package
app.use(session({
    secret: "secret123",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());

app.use(passport.session());

// export express
module.exports = app;