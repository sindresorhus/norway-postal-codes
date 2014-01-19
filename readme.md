# Norway Postal Codes [![Build Status](https://secure.travis-ci.org/sindresorhus/norway-postal-codes.png?branch=gh-pages)](http://travis-ci.org/sindresorhus/norway-postal-codes)

Various utf8 alternative formats to the default ansi tab-delimited postal code registry provided by [bring.no](http://www.bring.no/144754/postnummertabeller).

> Norwegian: Postnummerregisteret inneholder alle postnummer i Norge som brukes til adressering av post.


## Downloads

- [postal-codes-simple.json](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes-simple.json)  
  *Object with postal code as key and city as value.  
  Useful in forms to auto-complete city, see demo.*
- [postal-codes.json](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.json)  
  *Object with postal code as key and the rest as value.*
- [postal-codes.csv](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.csv)
- [postal-codes.tsv](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.tsv)

*Last updated 2014-01-06*


## Demo

See the [demo](http://sindresorhus.com/norway-postal-codes) for an example on how to auto-complete city from postal code.  
Which is a really good UX feature you should make use of.


## Getting started

Even though all converted files are provided here, you might want to do it yourself.

You'll need [Node.js](http://nodejs.org), then `cd` into this folder and `npm install`.

Run `./convert.js` to fetch and convert the latest registry, or you can supply a file path `./convert.js postnummerregister_ansi.txt` to convert a local file (make sure it's the ANSI version).

You can also use it as a Node module. Just install it `npm install --save norway-postal-codes` and then require it in your code:

```js
var postalCodes = require('norway-postal-codes');
console.log(postalCodes['1613']);
// FREDRIKSTAD
```
