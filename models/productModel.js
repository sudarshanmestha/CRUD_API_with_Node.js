const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    name: {
      type: String, // Fixed typo here
      required: [true, "please enter product name"],
    },
    quality: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number, // Fixed typo here
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Product', productSchema); // Fixed typo here
module.exports = Product;
