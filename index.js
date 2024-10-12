const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/rahuldatabase", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  Phoneno: Number,
  email: String,
  password: String
});

const User = mongoose.model("User", userSchema);

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Route for the login page
app.get('/login', (req, res) => {
    res.render("login.ejs");
});

// Route for the register page
app.get('/register', (req, res) => {
    res.render("register.ejs");
});

// Register user and save to the database
app.post("/register", (req, res) => {
    const { name, Phoneno, email, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.error(err);
            res.redirect("/register");
        } else {
            const newUser = new User({
                name: name,
                Phoneno: Phoneno,
                email: email,
                password: hash
            });

            newUser.save()
                .then(() => {
                    console.log("User registered successfully");
                    res.redirect("/login");
                })
                .catch((err) => {
                    console.error(err);
                    res.redirect("/register");
                });
        }
    });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const foundUser = await User.findOne({ email: email });

        if (foundUser) {
            const result = await bcrypt.compare(password, foundUser.password);
            if (result === true) {
                res.render("welcome.ejs", { userName: foundUser.name });
            } else {
                console.log("Password incorrect");
                res.render("login.ejs", { error: "Invalid email or password!" });
            }
        } else {
            console.log("User not found");
            res.render("login.ejs", { error: "Invalid email or password!" });
        }
    } catch (err) {
        console.error(err);
        res.render("login.ejs", { error: "An error occurred!" });
    }
});



app.get('/welcome',(req,res)=>{
    res.render("welcome.ejs");
})
// Default route to login page
app.get('/', (req, res) => {
    res.redirect("/login");
});

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
