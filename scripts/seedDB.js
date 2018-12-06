const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Dishes and Users collection and inserts the dishes below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mycatering"
);

const dishesSeed = [
  {
    title: "Pastelles",
    mealType: ["snack", "lunch", "dinner"],
    price: {"beef": 25, "chicken": 30, "vegetable": 20, "crab & shrimp": 40 },     
    recipe: [""]
  },
  {
    title: "Arepas",
    mealType: ["snack"],
    price: {"beef": 12, "chicken": 15, "vegetable": 10, "crab & shrimp": 20 },     
    recipe: [""]
  },
  {
    title: "Pies",
    mealType: ["snack"],
    price: {"beef": 12, "chicken": 15, "vegetable": 10 },     
    recipe: [""]
  },
  {
    title: "Sausage Rolls",
    mealType: ["snack"],
    price: {"sausage roll": 8},     
    recipe: [""]
  },
  {
    title: "Samosas",
    mealType: ["snack"],
    price: {"chicken": 20, "vegetable": 15 },     
    recipe: [""]
  },
  {
    title: "Mini Pizzas",
    mealType: ["snack"],
    price: {"pepperoni": 20, "vegetable": 10 },     
    recipe: [""]
  },
  {
    title: "Puffs",
    mealType: ["snack"],
    price: {"cheese": 5, "chicken": 8 },     
    recipe: [""]
  },
  {    
    title: "Currant rolls",
    mealType: ["snack", "desert"],
    price: {"currant rolls": 15},     
    recipe: [""]
  },
  {
    title: "Boitos",
    mealType: ["snack"],
    price: {"beef": 5, "chicken": 7, "vegetable": 3, "crab & shrimp": 10 },     
    recipe: [""]
  },
  {
    title: "Golden Chicken",
    mealType: ["lunch", "dinner"],
    price: {"golden chicken": 35 },     
    recipe: [""]
  },
  {
    title: "Bhagi and Rice",
    mealType: ["lunch", "dinner"],
    price: {"bhagi and rice": 20 },     
    recipe: [""]
  },
  {
    title: "Curried Meats",
    mealType: ["lunch", "dinner"],
    price: {"beef": 25, "chicken": 28, "goat": 32, "duck": 28 },     
    recipe: [""]
  },
  {
    title: "Bouches",
    mealType: ["snack"],
    price: {"crab": 8, "shrimp": 8, "smoked salmon": 8, "cheese": 5, "chicken": 5 },     
    recipe: [""]
  },
  {
    
    title: "Stuffed Eggs",
    mealType: ["snack"],
    price: {"stuffed eggs": 8 },     
    recipe: [""]
  },
  {
    
    title: "Fried Shark and Dip",
    mealType: ["snack"],
    price: {"fried shark with dip": 15 },     
    recipe: [""]
  },
  {
   
    title: "Shish Kebabs",
    mealType: ["snack", "lunch", "dinner"],
    price: {"beef": 12, "chicken": 15, "vegetable": 10, "shrimp": 20 },     
    recipe: [""]
  }
];

const usersSeed = [
  {
    name : "Maria Test",
    currentOrder: [{}],
    pastOrders: [{}],
    email: "maria@bg.tt",     
    phoneNumber: 868-622-2783,
    company: "British Gas"
  },
  {
    name : "Diane Test",
    currentOrder: [{}],
    pastOrders: [{}],
    email: "diane@shell.tt",     
    phoneNumber: 868-622-2020,
    company: "Shell"
  }
]

db.Dishes
  .remove({})
  .then(() => db.Dishes.collection.insertMany(dishesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
db.Users
.remove({})
.then(() => db.Users.collection.insertMany(usersSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
