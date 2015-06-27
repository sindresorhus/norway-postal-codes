#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var got = require('got');
var iconv = require('iconv-lite');

var POSTAL_CODE_URL = 'http://www.bring.no/hele-bring/produkter-og-tjenester/brev-og-postreklame/andre-tjenester/_attachment/159761?download=true';
var OUTPUT_DIR = 'converted';
var input = process.argv[2];

function write(filename, data) {
	fs.writeFileSync(path.join(OUTPUT_DIR, filename), data, 'utf8');
}

function convert(data) {
	var ret = {};
	var ret2 = {};
	var csv = iconv.decode(data, 'latin1').trim();

	csv.split('\r\n').forEach(function (row) {
		var columns = row.split('\t');
		ret[columns[0]] = columns.slice(1);
		ret2[columns[0]] = columns[1];
	});

	write('postal-codes.tsv', csv.replace(/\r\n/g, '\n'));
	write('postal-codes.csv', csv.replace(/\r\n/g, '\n').replace(/\t/g, ','));
	write('postal-codes.json', JSON.stringify(ret));
	write('postal-codes-simple.json', JSON.stringify(ret2));
	write('postal-codes-simple.js', 'module.exports=' + JSON.stringify(ret2));
}

if (input) {
	convert(fs.readFileSync(input));
} else {
	got(POSTAL_CODE_URL, {encoding: null}, function (err, data) {
		if (err) {
			throw err;
		}

		convert(data);
	});
}
