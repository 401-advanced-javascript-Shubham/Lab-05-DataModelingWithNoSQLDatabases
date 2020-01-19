'use strict';

require('@code-fellows/supergoose');

const Category = require('../Categories/category.js');
const category = new Category();

describe('Category Model', () => {
  it('can create() a record', () => {
    let obj = { id:'12345', name: 'Appliances' };
    return category.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key])
        });
      })
  });
  it('can get() records', () => {
    let obj = { id:'12345', name: 'Appliances'};
    return category.create(obj)
      .then(() => category.get())
      .then(data => {
        expect(data.length >= 1).toBeTruthy();
      })
      .catch(console.error);
  })
})