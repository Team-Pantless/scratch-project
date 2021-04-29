const express = require("express");
const path = require("path");
const cookieSession = require("cookie-session");
// const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");
const passport = require("passport");
require("./passport");

const userController = require("./controllers/userController");
// const cookieController = require("./controllers/cookieController");
// const sessionController = require("./controllers/sessionController");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Configure Session Storage
app.use(
  cookieSession({
    name: "session-name",
    keys: ["key1", "key2"],
  })
);

//Configure Passport
app.use(passport.initialize());
app.use(passport.session());

const checkUserLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

const apiRouter = require("./api/api_router.js");
const libraryRouter = require("./api/libraryRouter.js");


app.get("/", (req, res) => {
  // res.redirect("/home");
  res.sendFile(path.join(__dirname, "../html-scss/index.html"));
});


app.get("/signup", (req, res) => {
  res.redirect('http://localhost:8080/home');
});

//signup and login paths
app.post("/signup", userController.registerUser, (req, res) => {
  console.log("clicked signup button");
  res.redirect("/home");
  //res.sendFile(path.join(__dirname, "../html-scss/index.html"));
});


app.post("/login", passport.authenticate("local", {successRedirect: '/home', failureRedirect: '/login'}), function (req, res, next) {
  console.log('in passport local')
  
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

app.get("/auth/google/callback", passport.authenticate('google', {successRedirect:'http://localhost:8080/home', failureRedirect: '/failed' }),
  function(req, res, next){
    res.redirect('http://localhost:8080/home');
    
  }
);

app.get('/auth/twitter', passport.authenticate('twitter', {scope: ['email', 'profile']}));
app.get('/auth/twitter/callback', passport.authenticate('twitter', {successRedirect:'http://localhost:8080/home', failureRedirect: '/auth/error' }),
function(req, res) {
 
  res.redirect('http://localhost:8080/home');
});




app.get('/auth/facebook',passport.authenticate('facebook',{ scope : ['email'] }));
app.get('/auth/facebook/callback',passport.authenticate('facebook', {successRedirect:'http://localhost:8080/home', failureRedirect: '/auth/error' }),
function(req, res) {
  res.redirect('http://localhost:8080/home');
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../html-scss/index.html"));
});

//router paths
app.use("/api/", apiRouter);

app.use("/db/", libraryRouter);

// catch all for requests to unknown route

app.use("*", (req, res) => res.status(400).send("Page Not Found"));

// global error handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };

  const errObj = Object.assign({}, defaultErr, err);

  console.log(errObj.log);

  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
