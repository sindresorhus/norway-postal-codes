import test from 'ava';
import m from './converted/postal-codes-simple';

test('returns an object with all postal codes', t => {
	t.is('FREDRIKSTAD', m['1613']);
});

test('contains at least 100 items', t => {
	t.true(Object.keys(m).length > 100);
});
