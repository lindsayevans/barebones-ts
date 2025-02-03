import * as fs from 'node:fs';
import { Foo } from './models/Foo.ts';

export function add(a: number, b: number): number {
	return a + b;
}

export async function addAsync(a: number, b: number): Promise<number> {
	await Promise.resolve(true);
	return a + b;
}

const result = add(1, 2);
console.log(`Result of add(1, 2) = ${result}`);

const readme = fs.readFileSync('./README.md');
console.log('Contents of README.md:');
console.log(readme.toString());

const foo = new Foo();
foo.name = 'LinZ';
console.log(foo);
