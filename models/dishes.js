const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dishesSchema = new Schema({
  title: { type: String, required: true },
  mealType: { type: Array, required: true },
  price: { type: Object, required: true },
  recipe: { type: Array, default: [""] }
});

const Dishes = mongoose.model("Dishes", dishesSchema);

module.exports = Dishes;
