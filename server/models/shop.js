const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    owner: String,
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },

    typeShop: String,
    city: {
      type: String,
      require: true,
    },
    adress: {
      type: String,
      require: true,
    },
    nbOfSpecies: Number,
    phone: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Shop", shopSchema);
