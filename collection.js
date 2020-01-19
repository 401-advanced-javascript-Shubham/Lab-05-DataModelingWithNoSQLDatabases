'use strict';

const uuid = require('uuid/v4');
let Validator = require('./Validator/lib/validator.js');
const validator = new Validator();

class Collection {
  constructor(DataModel) {
    this.DataModel = DataModel
  }

  get(id) {
    /*
      {
        count: 12,
        results: [ {}, {], {}]
      }

      {}
    */

    if (!id) {
      return { results: [this.database] };
    }
    else {
      return this.database[id];
    }
  }

  create(data) {

    let record = new this.DataModel(data);
    this.database[record.id] = record;
    return record

  }

  update(id, record) {
    let record = new this.DataModel(data);
    this.database[record.id] = record;
    return record

  }

  delete(id) {
    delete this.database[id];
  }
}

module.exports = Collection;