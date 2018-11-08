import test from 'ava';
import norwayPostalCodes from './converted/postal-codes-simple';

test('returns an object with all postal codes', t => {
	t.is('FREDRIKSTAD', norwayPostalCodes['1613']);
});

test('contains at least 100 items', t => {
	t.true(Object.keys(norwayPostalCodes).length > 100);
});
