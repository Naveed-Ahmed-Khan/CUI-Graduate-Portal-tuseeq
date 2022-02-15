const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facultySchema = new Schema({
  username: { type: String },
  firstName: { type: String },
  lastName: { type: String },
  fullName: { type: String, Default: this.firstName + this.lastName },
  father_HusbandName: { type: String },
  nationality: { type: String },
  country: { type: String },
  city: { type: String },
  email: { type: String },
  // department_id: { type: Schema.Types.ObjectId, ref: "Department" },
  // campus_id: { type: Schema.Types.ObjectId, ref: "Campus" },
  password: { type: String },
  userType: { type: String },

  enable: { type: Boolean },
  status: { type: String },
  designation: { type: String },
  priority: { type: Number },
  isSubscribed: { type: Boolean },
});
module.exports = mongoose.model("Faculty", facultySchema);
