const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
var passport = require("passport");
const helpers = require("../helpers/helpers");
const Faculty = require("../models/faculty");
const auth = require("../auth/authenticate");

router.post("/signup", async (req, res, next) => {
  const user = req.body;
  console.log(user);
  if (user.userRole === "STUDENT") {
    console.log("student role" + user.userRole);
    let needs = await helpers.studentSignUpNeeds(user);
    console.log("route needs" + needs);
    let exists = await Student.findOne({ registrationNo: user.registrationNo });
    if (exists) {
      res.statusCode = 409;
      console.log("conflict");
      res.setHeader("Content-Type", "application/json");
      res.json({
        success: false,
        message: "Student with the same reg number already exists",
      });
    } else {
      Student.create({
        ...user,

        program_id: needs.program,

        // synopsisSession_id: needs.session._id,
      })
        /* supervisor_id: needs.supervisor._id,
        coSupervisor_id: needs.coSupervisor._id, */

        .then((student) => {
          console.log("Student created" + student.student_id);
          User.register(
            new User({
              username: user.username,
              email: user.email,
              student_id: student._id,
              userRole: { role: "STUDENT" },
            }),
            req.body.password,
            (err, user) => {
              if (err) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.json({ err });
              } else {
                passport.authenticate("local")(req, res, () => {
                  res.statusCode = 200;
                  res.setHeader("Content-Type", "application/json");
                  console.log("student role" + user.userRole);

                  res.json({
                    success: true,

                    status: "Registration Successful!",
                    user: req.user,
                  });
                });
              }
            }
          );
        })
        .catch((err) => {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.json({ err });
        });
    }
  } else {
    Faculty.create(user)
      .then((faculty) => {
        User.register(
          new User({
            email: user.email,
            username: user.username,
            faculty_id: faculty._id,
            userRole: { role: user.userRole },
          }),
          req.body.password,
          (err, user) => {
            if (err) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.json({ err });
            } else {
              passport.authenticate("local")(req, res, () => {
                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");
                console.log("faculty role" + user.userRole);

                res.json({
                  success: true,
                  status: "Registration Successful!",
                  user: req.user,
                });
              });
            }
          }
        );
      })
      .catch((err) => {
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.json({ err });
      });
  }
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  var token = auth.getToken({ _id: req.user._id });
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    success: true,
    token,
    status: "You are successfully logged in!",
    user: req.user,
  });
});

router.get("/logout", (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    req.session.destroy();
    res.clearCookie("cui-gp-portal");
  } else {
    res.status(401).json({ success: false, message: "You are not logged in!" });
  }
});

module.exports = router;
