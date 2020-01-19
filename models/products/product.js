'use strict';

const mongoose = require('mongoose');
const Model = require('../../model.js');

const product = mongoose.Schema({
      fields: {
          id: { type: 'string', required: true },
          category_id: { type: 'string', required: true },
          price: { type: 'number', required: true },
          weight: { type: 'number' },
          quantity: { type: 'number', required: true },
      }
  });
  
// class Product extends Model {
//   constructor(data) {
//     super(schema, data);
//   }
// }

//module.exports = Product;

module.exports = mongoose.model('product', product);
