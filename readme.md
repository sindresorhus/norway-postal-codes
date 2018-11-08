# Norway Postal Codes [![Build Status](https://travis-ci.org/sindresorhus/norway-postal-codes.svg?branch=gh-pages)](https://travis-ci.org/sindresorhus/norway-postal-codes)

Various UTF8 alternative formats to the default ansi tab-delimited postal code registry provided by [bring.no](http://www.bring.no/radgivning/sende-noe/adressetjenester/adresseregistre).

> Norwegian: Postnummerregisteret inneholder alle postnummer i Norge som brukes til adressering av post.


## Downloads

- [postal-codes-simple.json](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes-simple.json)<br>
  *Object with postal code as key and city as value.<br>
  Useful in forms to auto-complete city, see demo.*
- [postal-codes.json](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.json)<br>
  *Object with postal code as key and the rest as value.*
- [postal-codes.csv](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.csv)
- [postal-codes.tsv](https://raw.github.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.tsv)

*Last updated 2018-03-05*


## Demo

See the [demo](https://sindresorhus.com/norway-postal-codes) for an example on how to auto-complete city from postal code.<br>
Which is a really good UX feature you should make use of.


## Getting started

Even though all converted files are provided here, you might want to do it yourself.

You'll need [Node.js](https://nodejs.org), then `cd` into this folder and `npm install`.

Run `npm run make` to fetch and convert the latest registry, or you can supply a file path `npm run make postnummerregister_ansi.txt` to convert a local file (make sure it's the ANSI version).

You can also use it as a Node module. Just install it `npm install norway-postal-codes` and then require it in your code:

```js
const postalCodes = require('norway-postal-codes');

console.log(postalCodes['1613']);
// FREDRIKSTAD
```
