const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const synopsisScheduleSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  defenseDate: { type: Date },
  reportURL: { type: String },
  reportGeneratedBy: { type: mongoose.Types.ObjectId, ref: "User" },
  creationDate: { type: Date },
  scheduledBy: { type: mongoose.Types.ObjectId, ref: "User" },
  IP: { type: String, required: true },
  isActive: { type: Boolean },
  reportDate: { type: Date },
  reportSentDate: { type: Date },
});
