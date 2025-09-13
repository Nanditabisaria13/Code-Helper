const mongoose = require('mongoose')

const historySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  feature: { type: String, required: true }, // e.g., "Code Review", "Refactor"
  input: { type: String, required: true },   // original user input
  output: { type: String, required: true },  // AI-generated output         // for language converter
  createdAt: { type: Date, default: Date.now }
});

const historyModel = mongoose.models.history || mongoose.model("history",historySchema)

module.exports =  historyModel
