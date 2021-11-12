const express = require("express");
const cors = require("cors");
const session = require("express-session");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

const passport = require("./config/passport");

const { signin, signup } = require("./controllers/auth.controller");
const { body, validationResult } = require("express-validator");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

// app.use(methodOverride("_method"));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done) {
  //console.log("Serialize", user);
  //console.log("Serialize User:", token, userBookList, readingList);
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  //console.log("De-Serialize", user);
  //console.log(token, userBookList, readingList);
  done(null, user);
});

const userController = require("./controllers/user.controller");
const readingListController = require("./controllers/readingList.controller");
const userBookListController = require("./controllers/userBookList.controller");
const bookController = require("./controllers/book.controller");
const boardController = require("./controllers/board.controller");
const examController = require("./controllers/exam.controller");
const gradeController = require("./controllers/grade.controller");
const subjectController = require("./controllers/subject.controller");
const genreController = require("./controllers/genre.controller");
const authorController = require("./controllers/author.controller");
const categoryController = require("./controllers/category.controller");
const academiceController = require("./controllers/academicBook.controller");

app.post(
  "/signUp",
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email should be a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .withMessage("Invalid Password!")
    .isLength({ min: 8, max: 20 })
    .withMessage("Password should be 8-20 characters long"),
  async (req, res) => {
    const errors = validationResult(req);

    let finalErrors = null;
    if (!errors.isEmpty()) {
      finalErrors = errors.array().map((error) => {
        return {
          param: error.param,
          msg: error.msg,
        };
      });
      return res.status(201).send({ errors: JSON.stringify(finalErrors) });
    }

    return signup(req, res);
  }
);

app.post(
  "/signIn",
  body("email").isEmail().withMessage("Enter a valid email address!"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8, max: 20 })
    .withMessage("Incorrect password format!"),
  async (req, res) => {
    const errors = validationResult(req);
    const hasErrors = !errors.isEmpty();

    if (hasErrors) {
      let finalErrors = errors.array().map((error) => {
        return {
          param: error.param,
          msg: error.msg,
        };
      });

      return res.status(201).send({ errors: JSON.stringify(finalErrors) });
    }

    return signin(req, res);
  }
);

app.use("/users", userController);
app.use("/exam", examController);
app.use("/grade", gradeController);
app.use("/subject", subjectController);
app.use("/board", boardController);
app.use("/genre", genreController);
app.use("/category", categoryController);
app.use("/author", authorController);
app.use("/books", bookController);
app.use("/academicBook", academiceController);
app.use("/userBookList", userBookListController);
app.use("/readingList", readingListController);


/*---------FAcebook start ------*/
// app.get("/auth/facebook", passport.authenticate("facebook", { scope: "name" }));

// app.get(
//   "/auth/facebook/callback",
//   passport.authenticate("facebook", { failureRedirect: "http://localhost:3000/signIn" }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     res.redirect("http://localhost:3000/home");
//   }
// );
/*------facebook end-------- */

/*-----------GOOGLE ---------*/
app.get("/auth/google/failure", (req, res) => {
  return res.send("Something went wrong!");
});

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);


app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/signIn",
    //successRedirect: 'http://localhost:3000/home'
  }),
  function (req, res) {
    //const {token, userBookList, readingList} = req.user;
    //return res.status(200).json({token, userBookList, readingList});
    res.redirect("http://localhost:3000/home");
  }
);

app.get("/getuser", (req, res) => {
  //console.log("User", req.user);
  res.send(req.user);
});



module.exports = app;
