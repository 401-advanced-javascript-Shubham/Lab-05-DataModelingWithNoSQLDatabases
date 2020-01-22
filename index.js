'use strict';


//3rd party dependencies
require('dotenv').config();
const mongoose = require('mongoose');

//My Dependencies
const Category = require('./models/categories/category.js/index.js');
const Product = require('./models/products/products.js');


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//----------------------------------------

const category = new Category();
const product = new Product();

let appliance = {
  id: "12345",
  category_id: "Electronics",
  price: 50,
  weight: 100,
  quantity:2
};


product.create(appliance)
.then(record => console.log(record))
  .then(() => product.get())
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
