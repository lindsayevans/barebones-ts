import assert from 'node:assert';
import { describe, it } from 'node:test';

import { add, addAsync } from '../app.ts';

describe('Foo library', () => {
	it('adds numbers', () => {
		const result = add(123, 321);

		assert.equal(result, 444);
	});

	it('adds numbers asynchronously', async () => {
		const result = await addAsync(123, 321);

		assert.equal(result, 444);
	});
});
