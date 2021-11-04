const mongoose = require("mongoose");

const animalsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true,
      minlenght: [3, "too short"],
      maxlength: [30, "Too long"],
    },
    specie: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    race: String,
    age: Number,
    color: String,
    pedestal: Boolean,
    gender: String,
    climate: String,
    alimentationType: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Animals", animalsSchema);
