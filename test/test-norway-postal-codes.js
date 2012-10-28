/*global describe, it */
'use strict';

var assert = require('assert');
var postalCodes = require('../converted/postal-codes-simple');

describe('norway-postal-codes', function() {
	it('should return an object with all postal codes', function() {
		assert.strictEqual('FREDRIKSTAD', postalCodes['1613']);
	});

	it('should contain at least 100 items', function() {
		assert.strictEqual(true, Object.keys(postalCodes).length > 100);
	});
});
