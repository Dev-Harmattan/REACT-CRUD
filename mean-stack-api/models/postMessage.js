const mongoose = require("mongoose");

const PostMessage = mongoose.model("postMessage", {
  title: { type: String },
  message: { type: String },
}, "postMessage");

module.exports = {PostMessage}