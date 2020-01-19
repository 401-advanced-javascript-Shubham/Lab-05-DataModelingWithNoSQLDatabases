'use strict';

require('@code-fellows/supergoose');

const Product = require('../products/products.js');
const product = new Product();

describe('Product Model', () => {
    it('can create() a record', () => {
      let obj = { id:'12345',category_id: 'Electronics', price: 70, weight: 50, quantity: 2 };
      return product.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key])
          });
        })
    });
    it('can get() records', () => {
      let obj = { id:'12345',category_id: 'Electronics', price: 70, weight: 50, quantity: 2 };
      return product.create(obj)
        .then(() => product.get())
        .then(data => {
          expect(data.length >= 1).toBeTruthy();
        })
        .catch(console.error);
    })
  })