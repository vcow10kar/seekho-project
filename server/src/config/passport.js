require("dotenv").config();
const passport = require("passport");
const { v4: uuidV4 } = require("uuid");
const { newToken } = require("../controllers/auth.controller");

var GoogleStrategy = require("passport-google-oauth2").Strategy;
var FacebookStrategy = require("passport-facebook").Strategy;

const User = require("../models/user.model");
const UserBookList = require("../models/userBookList.model");
const ReadingList = require("../models/readingList.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      userProfileURL: "https://**www**.googleapis.com/oauth2/v3/userinfo",
      passReqToCallback: true,
    },

    async function (request, accessToken, refreshToken, profile, done) {
      const email = profile?._json?.email;

      let user;
      let userBookList;
      let readingList;
      try {
        user = await User.findOne({ email }).lean().exec();

        if (!user) {
          user = await User.create({
            email: email,
            password: uuidV4(),
            role: "user",
          });

          const temp = {
            user: user["_id"],
            book: [],
            academic: [],
          };
          userBookList = await UserBookList.create(temp);
          readingList = await ReadingList.create(temp);
        }

        userBookList = await UserBookList.findOne({ user: user._id });
        readingList = await ReadingList.findOne({ user: user._id });

        const token = newToken(user);

        let new_user = {
          userid: user._id,
          token: token,
          userBookList: userBookList._id,
          readingList: readingList._id,
        };

        //console.log(new_user);
        return done(null, new_user);
      } catch (err) {
        console.log("error:", err);
      }
    }
  )
);

/*--------------FACEBOOK----------*/
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/facebook/callback",
      profileFields: ["id", "displayName", "name", "gender", "email"],
    },
  async   function (accessToken, refreshToken, profile, done) {
      const name = profile?._json?.name;
      console.log(name);
      //  return done(null, profile);
      let user;
      let userBookList;
      let readingList;
      try {
        user = await User.findOne({ name }).lean().exec();

        if (!user) {
          user = await User.create({
            name: name,
            password: uuidV4(),
            role: "user",
          });

          const temp = {
            user: user["_id"],
            book: [],
            academic: [],
          };
          userBookList = await UserBookList.create(temp);
          readingList = await ReadingList.create(temp);
        }

        userBookList = await UserBookList.findOne({ user: user._id });
        readingList = await ReadingList.findOne({ user: user._id });

        const token = newToken(user);

        user = {
          userid: user._id,
          token: token,
          userBookList: userBookList._id,
          readingList: readingList._id,
        };
        return done(null, user);
      } catch (err) {
        console.log("error:", err);
      }
    }
  )
);
module.exports = passport;