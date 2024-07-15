const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required!"],
  },
  price: {
    type: String,
    required: [true, "Price is required!"],
  },
  feature: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["Apple", "Samsung", "HP", "Dell", "MI", "Microsoft"],
      message: `{VALUE} is not suported.`,
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
