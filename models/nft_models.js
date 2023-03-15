const mongoose = require("mongoose");

const nftSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name required"], unique: true },
  price: {
    type: Number,
    required: [true, "Price required"],
  },
  // discountPrice: {
  //   type: Number,
  //   required: [true, "Price required"],
  //   values: function (val) {
  //     return val < this.price;
  //   },
  // },

  rating: { type: Number, default: 0.5 },
  duration: { type: Number },
  maxGroupSize: { type: Number },
  difficulty: {
    type: String,
    enum: {
      values: ["easy", "medium", "difficult"],
      message: "Difficulty should either easy or max ",
    },
  },
  ratingsAverage: { type: Number, min: [1, "min 1.5"], max: [5, "max 5"] },
  ratingsQuantity: {
    type: Number,
    validate: {
      validator: function (val) {
        return val < this.price;
      },
    },
  },
  summary: { type: String },
  description: { type: String, required: [true, "Description required"] },
  imageCover: { type: String },
  images: [String],
  startDates: [Date],
  created: { type: Date, default: Date.now() },
});

const NFT = mongoose.model("NFT", nftSchema);

module.exports = NFT;
