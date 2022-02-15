const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisoryCommitteeSchema = new Schema({
  schedule_id: { type: mongoose.Types.ObjectId, ref: "ThesisSchedule" },
  user_id: [{ type: mongoose.Types.ObjectId, ref: "User" }],
});
module.exports = mongoose.model("SupervisoryCommittee", thesisEvaluationSchema);
