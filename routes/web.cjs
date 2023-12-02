/**
 * Route list.
 * 1. Make sure we pass a function in second param as a request handler (just like golang).
 * 2. We can pass data to view files through render's function second param.
 * 3. ExpressJS assumes all view files placed in a folder named "views"
 */
const app = require("../app.cjs");

app.get("/", function(req, res) {
    res.render("index.ejs", {name: "Valerian"});
});

app.get("/login", function(req, res) {
    res.render("login.ejs");
});

app.get("/register", function(req, res) {
    res.render("register.ejs");
});

app.post("/register", function(req, res) {
    res.render("register.ejs");
});