const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  currentOrder: { type: Array, default: [{}] },
  pastOrders: { type: Array, default: [{}] },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  company: { type: String, default: "" }
});

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
