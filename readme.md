# Norway Postal Codes

Various UTF-8 alternative formats to the default Latin-1 (ANSI) tab-delimited postal code registry provided by [bring.no](https://www.bring.no/tjenester/adressetjenester/adresseregistre).

> Norwegian: Postnummerregisteret inneholder alle postnummer i Norge som brukes til adressering av post.

## Downloads

- [postal-codes-simple.json](https://raw.githubusercontent.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes-simple.json)\
  *Object with postal code as key and city as value.\
  Useful in forms to auto-complete city, see demo.*
- [postal-codes.json](https://raw.githubusercontent.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.json)\
  *Object with postal code as key and the rest as value.*
- [postal-codes.csv](https://raw.githubusercontent.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.csv)
- [postal-codes.tsv](https://raw.githubusercontent.com/sindresorhus/norway-postal-codes/gh-pages/converted/postal-codes.tsv)

*Last updated 2026-05-26*

## License

The code is MIT. The bundled postal code data is provided by Bring under the [Norwegian Licence for Open Government Data (NLOD)](https://data.norge.no/nlod/en/), which permits redistribution with attribution. Source: <https://www.bring.no/postnummerregister-ansi.txt>.

## Demo

See the [demo](https://sindresorhus.com/norway-postal-codes) for an example on how to auto-complete city from postal code.\
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
