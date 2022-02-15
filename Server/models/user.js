const mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
  student_id: { type: Schema.Types.ObjectId, ref: "Student" },
  faculty_id: { type: Schema.Types.ObjectId, ref: "Faculty" },

  userRole: [
    {
      role: { type: String },
      enable: { type: Boolean },
    },
  ],
});
userSchema.plugin(passportLocalMongoose, { usernameField: "email" });

module.exports = mongoose.model("User", userSchema);
