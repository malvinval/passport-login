// import the app.js
const app = require("./app.js");

// import route list
const routes = require("./routes/web.js");

// we have to set our view engine (in this case, ejs.)
app.set("view-engine", "ejs");

// handle requests with registered routes
app.get(function() { return routes; });

// deploy app at port 8000
app.listen(8000);