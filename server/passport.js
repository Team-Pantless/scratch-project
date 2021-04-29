require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const db = require("./models/libraryModel");
const bcrypt = require("bcryptjs");


const twitteremail = {}

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
      const email = profile.emails[0].value;
      const password = profile.id
      const params = [email, password]    
      const queryString = `INSERT INTO accounts (email, password) VALUES ($1, $2) ON CONFLICT DO NOTHING`
      db.query(queryString, params, (err, res) => {
        
        if (err) {
          console.log("error creating user", err);
          
        } 
      })
      
      return done(null, profile);
     
      
      done(null, profile);
    }
  )
);

passport.use(new TwitterStrategy({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  callbackURL: process.env.TWITTER_CALLBACK_URL,
  includeEmail: true,
  passReqToCallback : true
},
function(req, accessToken, refreshToken, profile, cb) {
  twitteremail.email = profile.emails[0].value;
  const email = profile.emails[0].value;
  const password = profile.id
  const params = [email, password]    
  const queryString = `INSERT INTO accounts (email, password) VALUES ($1, $2) ON CONFLICT DO NOTHING`
  db.query(queryString, params, (err, res) => {
    console.log('in db query')
    if (err) {
      console.log("error creating user", err);
      
    } else {
      console.log("successfully inserted new registered user row");
      
      
    }
  })
  
  return cb(null, profile);
}
));


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    const email = profile._json.email;
    const password = profile._json.sub
    const params = [email, password]    
    const queryString = `INSERT INTO accounts (email, password) VALUES ($1, $2) ON CONFLICT DO NOTHING`
    db.query(queryString, params, (err, res) => {
      console.log('in db query')
      if (err) {
        console.log("error creating user", err);
        
      } else {
        console.log("successfully inserted new registered user row");
        console.log(params[0]);
        
      }
    })
    
    return cb(null, profile);
  }
));

passport.use(new LocalStrategy({usernameField:"email", passwordField:"password"},(email, password, cb) => {
  console.log('in passport localstrategy promise ')
  db.query('SELECT user_id, email, password FROM accounts WHERE email=$1', [email], (err, result) => {
    if(err) {
      console.log('Getting error immediately.')
      return cb(err)
    }

    if(result.rows.length > 0) {
      const first = result.rows[0]
      bcrypt.compare(password, first.password, function(err, res) {
        if(res) {
          console.log(first)
          return cb(null, { id: first.user_id, email: first.email })
         } else {
          cb(null, false)
         }
       })
     } else {
       cb(null, false)
     }
  })
}))

module.exports = {twitteremail} ;