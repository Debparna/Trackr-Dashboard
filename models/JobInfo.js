const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const JobInfoSchema = new Schema({
  company_name: {
    type: String,
    required: true
  }
});

module.exports = JobInfo = mongoose.model("jobinfo", JobInfoSchema);
