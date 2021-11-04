const mongoose = require("mongoose");

const providersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      trim: true, // delte space befor and after the string
      minlenght: [3, "too short"],
      maxlength: [30, "Too long"],
    },
    typeOfBusiness: String,
    city: {
      type: String,
      require: true,
    },
    adress: {
      type: String,
      require: true,
    },
    nbOfSpecies: Number,
    slaughterhouse: String,
    website: String,
    phone: Number,

    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Providers", providersSchema);
