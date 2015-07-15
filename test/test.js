var chai = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var Big = require('big.js');
require('..')(Big);

describe('bigjs-isZero', function() {
  'use strict';

  it('adds the isZero method to a Big instance', function() {
    var two = new Big(2);
    expect(two).to.have.property('isZero').to.be.a('function');
  });

  describe('method', function() {
    it('returns false if number is not zero', function() {
      var two = new Big(2);
      assert.isFalse(two.isZero());
    });

    it('returns true if number is zero', function() {
      var zero = new Big(0);
      assert.isTrue(zero.isZero());
    });
  });
});
