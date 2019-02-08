import * as fs from 'fs';

export const foo = () => {
    return 1
}

const result = foo()
console.log(`Result of foo() = ${result}`)

const pkg = fs.readFileSync('./README.md')
console.log('Contents of README.md:')
console.log(pkg.toString())
