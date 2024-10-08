const express = require('express');
const app = express();
const port = 8080;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Route for the login page
app.get('/login', (req, res) => {
    res.render("login.ejs");
});

app.get('/', (req, res) => {
    res.render("login.ejs");
});


// Route for the register page
app.get('/register', (req, res) => {
    res.render("register.ejs");
});

// Start the server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
