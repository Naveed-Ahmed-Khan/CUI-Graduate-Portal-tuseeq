const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const programReportSchema = new Schema({
  student_id: { type: mongoose.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  status: { type: String, required: true },
  comments: { type: String, required: true },
});
