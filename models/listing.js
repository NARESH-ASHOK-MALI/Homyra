const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: { type: String, default: "listingimage" },
    url: {
      type: String,
      default:
        "https://image.cnbcfm.com/api/v1/image/106011877-1562774879189za_120942_cape_town_beyond_000_webhero_1612_jva.jpg?v=1562774912",
      set: (v) =>
        v === ""
          ? "https://image.cnbcfm.com/api/v1/image/106011877-1562774879189za_120942_cape_town_beyond_000_webhero_1612_jva.jpg?v=1562774912"
          : v,
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;