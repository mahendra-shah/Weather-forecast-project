const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs')
const port = process.env.PORT || 5000;

// public static_path
const static_path = path.join(__dirname,"../public");
const templates_path = path.join(__dirname,"../templates/views");
const partial_path = path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs'); // handle bar
app.use(express.static(static_path));
app.set('views',templates_path);
hbs.registerPartials(partial_path); 

// routing
// home page
app.get("/", (req, res) => {
    res.render('index');
});

// weather
app.get("/weather", (req, res) => {
    res.render('weather');
});

// about page
app.get("/about", (req, res) => {
    res.render('about');
});

// error page || page not found
app.get("*", (req, res) => {
    res.render("404", {
        errorMsg: 'Opps! Page Not Found'
    });
});

app.listen(port, () => {
    console.log("listening to port", port);
});