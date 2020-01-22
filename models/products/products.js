'use strict';

const schema = require('./product.js');
const Collection = require('../../collection.js');


class Product extends Collection {


  constructor() {
    super()
    this.schema = schema;
  }

//   get(id) {
//     if (id) { return this.schema.findOne({ _id: id }); }
//     else { return schema.find({}); }
//   }

//   create(record) {
//     let newRecord = new this.schema(record);
//     return newRecord.save();
//   }

//   update(id, record) {
//     return this.schema.findByIdAndUpdate(id, record, { new: true });
//   }

//   delete(id) {
//     return this.schema.findByIdAndDelete(id);
//   }
 }

module.exports = Product;
