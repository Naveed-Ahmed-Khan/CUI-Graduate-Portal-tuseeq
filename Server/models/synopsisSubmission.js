const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const synopsisSubmissionSchema = new Schema({
  student_id: { type: Schema.Types.ObjectId, ref: "Student" },
  session_id: { type: mongoose.Types.ObjectId, ref: "Session" },
  program_id: { type: mongoose.Types.ObjectId, ref: "Program" },

  synopsisNotification: { type: String /* required: true */ },
  synopsisFileName: { type: String /* required: true */ },
  plagiarismReport: { type: String /* required: true */ },
  externalExaminer: { type: String /* required: true */ },
  synopsisPresentation: { type: String /* required: true */ },
  creationDate: { type: Date, default: Date.now /* required: true */ },
  isActive: { type: Boolean /* required: true */ },
  ipAddress: { type: String /* required: true */ },
});
module.exports = mongoose.model("SynopsisSubmission", synopsisSubmissionSchema);
