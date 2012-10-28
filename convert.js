#!/usr/bin/env node
'use strict';

var fs = require('fs');
var path = require('path');
var request = require('request');
var iconv = require('iconv-lite');

var POSTAL_CODE_URL = 'http://www.bring.no/hele-bring/forside/_attachment/159761';
var input = process.argv[2];

function convert(data) {
	var dir = 'converted';
	var ret = {};
	var ret2 = {};
	var csv = iconv.decode(data, 'latin1').trim();

	csv.split('\r\n').forEach(function(row) {
		var columns = row.split('\t');
		ret[columns[0]] = columns.slice(1);
		ret2[columns[0]] = columns[1];
	});

	fs.writeFileSync(path.join(dir, 'postal-codes.tsv'), csv.replace(/\r\n/g, '\n'), 'utf8');
	fs.writeFileSync(path.join(dir, 'postal-codes.csv'), csv.replace(/\r\n/g, '\n').replace(/\t/g, ','), 'utf8');
	fs.writeFileSync(path.join(dir, 'postal-codes.json'), JSON.stringify(ret), 'utf8');
	fs.writeFileSync(path.join(dir, 'postal-codes-simple.json'), JSON.stringify(ret2), 'utf8');
	fs.writeFileSync(path.join(dir, 'postal-codes-simple.js'), 'module.exports=' + JSON.stringify(ret2), 'utf8');
}

if (input) {
	convert(fs.readFileSync(input));
} else {
	request(POSTAL_CODE_URL, {encoding: null}, function(err, res, body) {
		if (err || res.statusCode !== 200) {
			return console.log(err);
		}
		convert(body);
	});
}
