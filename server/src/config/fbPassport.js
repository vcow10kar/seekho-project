require("dotenv").config();
const passport = require('passport');
const {v4: uuidV4} = require('uuid');
const { newToken } = require("../controllers/auth.controller");

var FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/user.model');
const UserBookList = require('../models/userBookList.model');
const ReadingList = require('../models/readingList.model');

/*--------------FACEBOOK----------*/
passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/facebook/callback",
        profileFields:['id','displayName','name','gender','email']
      },
      function (accessToken, refreshToken, profile, cb) {
        // User.findOrCreate({ facebookId: profile.id }, function (err, user) {
          console.log(profile);
          return cb(null,profile);j
        // });
      }
    )
  );

  module.exports = passport; 