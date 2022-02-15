const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Student = require("../models/student");
var passport = require("passport");
const auth = require("../auth/authenticate");
const helpers = require("../helpers/helpers");
const SynopsisSubmission = require("../models/synopsisSubmission");
const Notification = require("../models/notification");
const Announcement = require("../models/announcement");

//studentDashboard Route == /students

router.get("/", auth.verifyUser, auth.checkStudent, (req, res) => {
  User.find({ _id: req.user._id })
    .populate({
      path: "student_id",
      populate: [
        {
          path: "program_id",
          model: "Program",
        },
        {
          path: "synopsisSession_id",
          model: "Session",
        },
        {
          path: "supervisor_id",
          model: "Faculty",
        },
        {
          path: "coSupervisor_id",
          model: "Faculty",
        },
      ],
    })
    .exec()
    .then((student) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(student);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

//signleStudent by ID route== students/:id

router.get("/:id", auth.verifyUser, auth.checkStudent, (req, res) => {
  Student.find({ _id: req.params.id })
    .then((students) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(students);
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

//update student profile route== students/:id

router.put("/:id", auth.checkStudent, async (req, res) => {
  const user = req.body;
  let needs = await helpers.studentUpdateNeeds(req);
  await User.updateOne(
    { _id: req.params.id },
    { $set: { username: user.username } }
  )
    .then(async () => {
      await Student.findOneAndUpdate(
        { _id: needs.student_id },
        {
          $set: {
            ...user,
            supervisor_id: needs.supervisor._id,
            coSupervisor_id: needs.supervisor._id,
          },
        },
        { upsert: true }
      )
        .then((student) => {
          res.setHeader("Content-Type", "application/json");
          res
            .status(200)
            .json({ beforeUpdate: student, afterUpdate: req.body });
        })
        .catch((err) => {
          res.setHeader("Content-Type", "application/json");
          res.status(500).json({ success: false, message: err.message });
        });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

router.post(
  "/submit-synopsis",
  auth.checkStudent,

  (req, res, next) => {
    const body = req.body;
    const student = req.user._id;

    SynopsisSubmission.create({ ...body, student_id: student })
      .then((synopsis) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json({ success: true, message: "Submitted" });
      })
      .catch((err) => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ success: false, message: err.message });
      });
  }
);
router.post(
  "/submit-thesis",
  auth.checkStudent,

  (req, res, next) => {
    const body = req.body;
    const student = req.user._id;
    SynopsisSubmission.create({ ...body, student_id: student })
      .then((synopsis) => {
        res.setHeader("Content-Type", "application/json");
        res.status(200).json({ success: true, message: "Submitted" });
      })
      .catch((err) => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({ success: false, message: err.message });
      });
  }
);
//view notifications
router.get("/notifications", auth.checkStudent, (req, res) => {
  Notification.find({ student_id: req.user._id })
    .then((notifications) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, notifications });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});
//view announcements
router.get("/announcements", auth.checkStudent, (req, res) => {
  Announcement.find()
    .then((announcements) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json({ success: true, announcements });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

//change password
router.post("/change-password", auth.checkStudent, (req, res) => {
  req.user
    .changePassword(req.body.oldPassword, req.body.newPassword)
    .then((user) => {
      Student.findOne({ _id: user.student_id })
        .then((student) => {
          res.setHeader("Content-Type", "application/json");
          res.status(200).json({ success: true, message: "Password Updated" });
        })
        .catch((err) => {
          res.setHeader("Content-Type", "application/json");
          res.status(500).json({ success: false, message: err.message });
        });
    })
    .catch((err) => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({ success: false, message: err.message });
    });
});

module.exports = router;
