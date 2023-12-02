// import initPassport function from passport-config.cjs
const initPassport = require("../configs/passport.cjs");

const passport = () => {
    // import users array from data.cjs
    const data = require("../data.cjs");
    
    let users = data.users;
    
    // run the imported initPassport function
    initPassport(
        passport,
        email => users.find(user => user.email === email),
        id => users.find(user => user.id === id)
    );
}

module.exports = passport;