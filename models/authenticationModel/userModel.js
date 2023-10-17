const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    phoneNo: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", userSchema);
