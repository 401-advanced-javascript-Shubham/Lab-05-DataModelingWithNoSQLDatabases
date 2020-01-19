'use strict';


const mongoose = require('mongoose');
const Model = require('../../model.js');

const categories = mongoose.Schema({
  id: { type: 'String' ,required: true },
  name: { type: 'String' , required: true },
      });
  


module.exports = mongoose.model('categories',categories);