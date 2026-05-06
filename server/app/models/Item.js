const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemName: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
    },
    purchaseCost: {
      type: Number,
      required: true,
    },
    listingPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
      default: 0,
    },
    platformFee: {
      type: Number,
      default: 0,
    },
    shippingCost: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Purchased", "Listed", "Sold"],
      default: "Purchased",
    },
    notes: String,
    imageUrl: String,
  },
  { timestamps: true },
);

// profit calculation
itemSchema.virtual("profit").get(function () {
  return (
    this.salePrice - this.purchaseCost - this.platformFee - this.shippingCost
  );
});

itemSchema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Item", itemSchema);
