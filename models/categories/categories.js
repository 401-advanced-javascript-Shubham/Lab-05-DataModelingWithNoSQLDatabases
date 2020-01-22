'use strict';

const schema = require('./category.js');
const Collection = require('../../collection.js');


class Category extends Collection {


  constructor() {
    super()
    this.schema = schema
  }
}

module.exports = Category;

