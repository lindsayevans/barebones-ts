import * as fs from 'fs';

export function add(a: number, b: number): number {
    return a + b
}

export async function addAsync(a: number, b: number): Promise<number> {
    await Promise.resolve(true)
    return a + b
}

const result = add(1, 2)
console.log(`Result of add(1, 2) = ${result}`)

const pkg = fs.readFileSync('./README.md')
console.log('Contents of README.md:')
console.log(pkg.toString())
