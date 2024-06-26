// MONGOOSE SCHEMA
const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionSchema = new Schema({
  questionId: String,
  questionName: String,
  contestId: String,
  questionDescriptionText: String,
  questionInputText: String,
  questionOutputText: String,
  questionExampleInput1: String,
  questionExampleOutput1: String,
  questionExampleInput2: String,
  questionExampleOutput2: String,
  questionExampleInput3: String,
  questionExampleOutput3: String,
  questionHiddenInput1: String,
  questionHiddenInput2: String,
  questionHiddenInput3: String,
  questionHiddenOutput1: String,
  questionHiddenOutput2: String,
  questionHiddenOutput3: String,
  questionExplanation: String,
  code_py: String,
  code_java: String,
  code_c: String,
  code_cpp: String,
  author: String,
  editorial: String,
  difficulty: String,
  estimateTime: String,
  language: String,
  courseId: Array,
  conceptLevel: String,
  company: Array,
  topic: Array,
  CountValue:Number,
  tags: Array,
});

module.exports = mongoose.model("Question", questionSchema);
