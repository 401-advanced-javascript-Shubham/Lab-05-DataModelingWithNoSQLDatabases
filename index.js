'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Category = require('./models/categories/categories.js');
const category = new Category;
const Product = require('./models/products/products.js');
const product = new product();

let appliance = {
  id: "12345",
  category_id: "Electronics",
  price: 50,
  weight: 100,
  quantity:2
};


product.create(appliance)
  .then(() => food.get())
  .then(data => console.log(data))
  .catch(console.error);

  let app = {
    id: "12345",
   name: "Phone"
  };
  
  
  category.create(app)
    .then(() => category.get())
    .then(data => console.log(data))
    .catch(console.error);
