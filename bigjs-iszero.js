/*! bigjs-iszero v1.0.0 https://github.com/tfoxy/bigjs-iszero/LICENSE */

/*global define*/

(function(root, factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.bigjsIsZero = factory();
  }
}(this, function() {
  'use strict';
  return function(Big) {
    if (!('isZero' in Big.prototype)) {
      Big.prototype.isZero = function() {
        return !!this.c && this.c[0] == 0;
      };
    }
  };
}));
