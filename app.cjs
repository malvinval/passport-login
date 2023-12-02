// import express
const express = require("express");

// import express flash
const flash = require("express-flash");

// import passport package
const passport = require("passport");

// import express session package
const session = require("express-session");

// import initPassport function from passport-config.cjs
const initPassport = require("./configs/passport.cjs");

// import users array from data.cjs
const data = require("./data.cjs");
let users = data.users;
// run the imported initPassport function
initPassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
);

// initialize express app
const app = express();

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