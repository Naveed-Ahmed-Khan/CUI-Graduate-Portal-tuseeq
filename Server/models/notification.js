const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  Notification: { type: String, required: true },
  sendTo: { type: mongoose.Types.ObjectId, ref: "Student" },
  createdBy: { type: mongoose.Types.ObjectId, ref: "User" },
  creationDate: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
  isRead: { type: Boolean },
});
module.exports = mongoose.model("Notification", notificationSchema);
