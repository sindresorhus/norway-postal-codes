#!/usr/bin/env node
'use strict';
const fs = require('fs');
const path = require('path');
const got = require('got');
const iconv = require('iconv-lite');

const POSTAL_CODE_URL = 'https://www.bring.no/postnummerregister-ansi.txt';
const OUTPUT_DIR = 'converted';
const input = process.argv[2];

function write(filename, data) {
	fs.writeFileSync(path.join(__dirname, OUTPUT_DIR, filename), data, 'utf8');
}

function convert(data) {
	const ret = {};
	const ret2 = {};
	const csv = iconv.decode(data, 'latin1').trim();

	for (const row of csv.split('\r\n')) {
		const columns = row.split('\t');
		ret[columns[0]] = columns.slice(1);
		ret2[columns[0]] = columns[1];
	}

	write('postal-codes.tsv', csv.replace(/\r\n/g, '\n'));
	write('postal-codes.csv', csv.replace(/\r\n/g, '\n').replace(/\t/g, ','));
	write('postal-codes.json', JSON.stringify(ret));
	write('postal-codes-simple.json', JSON.stringify(ret2));
	write('postal-codes-simple.js', `module.exports=${JSON.stringify(ret2)}`);
}

async function make() {
	if (input) {
		convert(fs.readFileSync(input));
	} else {
		try {
			const body = await got(POSTAL_CODE_URL).buffer();
			convert(body);
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = make;

if (require.main === module) {
	make();
}
