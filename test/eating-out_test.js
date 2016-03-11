var assert = require('assert');
var eating_out = require('../eating-out');
var m1 = "Hi Xola thanks for joining us last night. Your team ate 8 burgers, drank 17 beers and 11 fanta's";
var m2 = "Please send me the payment via EFT prices are as follows: burgers - 37 each, beers - 12, fanta's 9";

describe("eating_out", function() {

    it("should extract the items and their respective quantities", function() {
      var result = eating_out.getQuantity(m1);
      assert.deepEqual(result, [{item: 'burger', quantity: 8}, {item: 'beer', quantity: 17}, {item: 'fanta', quantity: 11}]);
    });

    it("should extract the items and their respective prices", function() {
      var result = eating_out.getPrice(m2);
      assert.deepEqual(result, [{item: 'burger', price: 37}, {item: 'beer', price: 12}, {item: 'fanta', price: 9}]);
    });

    it("should return the item, its quantity, price and subtotal", function() {
      var result = eating_out.getBill(m1, m2);
      assert.deepEqual(result, [{item: 'burger', quantity: 8, price: 37, subtotal: 296}, {item: 'beer', quantity: 17, price: 12, subtotal: 204}, {item: 'fanta', quantity: 11, price: 9, subtotal: 99}]);
    });

    it("should return the total to be EFT'd", function() {
      var result = eating_out.toPay(m1, m2);
      assert.equal(result, 'total due: R599');
    });

});
