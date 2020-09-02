const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const postSchema = {
  title: {
    type: String,
    required: "Title is Required",
    minlength: 4,
    maxlength: 150,
  },
  body: {
    type: String,
    required: "Body is Required",
    minlength: 4,
    maxlength: 2000,
  },
  photo: {
    type: Buffer,
    contentType: String,
  },
  postedBy: {
    type: ObjectId,
    ref: "User",
  },
  created: {
    type: Date,
    default: Date.now,
  },
};

module.exports = mongoose.model("Post", postSchema);
