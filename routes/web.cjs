const app = require("../app.cjs");
const bcrypt = require("bcrypt");
const passport = require("passport");
const data = require("../data.cjs");
const isAuth = require("../middlewares/isAuth.cjs");
const isNotAuth = require("../middlewares/isNotAuth.cjs");

/**
 * Route list.
 * 1. Make sure we pass a function in second param as a request handler (just like golang).
 * 2. We can pass data to view files through render's function second param.
 * 3. ExpressJS assumes all view files placed in a folder named "views"
 */
app.get("/", isAuth, function(req, res) {
    res.render("index.ejs", {name: req.user.name});
});

app.get("/login", isNotAuth, function(req, res) {
    res.render("login.ejs");
});

app.post("/login", isNotAuth, passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: false
}));

app.get("/register", isNotAuth,function(req, res) {
    res.render("register.ejs");
});

// use async function to implement try-catch block
app.post("/register", isNotAuth, async function(req, res) {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        data.storeUser({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        res.redirect("/login")
    } catch (error) {
        res.redirect("/register");
    }
});

