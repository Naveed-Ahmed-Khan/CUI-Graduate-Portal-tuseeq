const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const synopsisEvaluationSchema = new Schema({
  schedule_id: { type: mongoose.Types.ObjectId, ref: "SynopsisSchedule" },
  evaluator_id: { type: mongoose.Types.ObjectId, ref: "User" },
  isRequiredAgain: { type: Boolean, required: true },
  evaluationStatus: { type: mongoose.Types.ObjectId, ref: "EvaluationStatus" },
  comments: { type: String, required: true },
  creationDate: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
  IP_address: { type: String, required: true },
});
module.exports = mongoose.model("SynopsisEvaluation", synopsisEvaluationSchema);
