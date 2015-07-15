# bigjs-iszero

Add isZero method to big.js

## Load

It can be loaded via a script tag in an HTML document for the browser

    <script src='./relative/path/to/bigjs-iszero.js'></script>

or as a CommonJS, [Node.js](http://nodejs.org) or AMD module using `require`.

    var bigjsIsZero = require('bigjs-iszero');

For Node.js, the library is available from the npm registry:

    $ npm install bigjs-iszero

## Use

    var Big = require('big.js');
    bigjsIsZero(Big);
    
    new Big(0).isZero() // => true
    new Big(1).isZero() // => false
