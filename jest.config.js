module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['src'],
    testMatch: [
        '<rootDir>/**/?(*.)test.ts'
    ],
    moduleFileExtensions: [
        'ts',
        'js'
    ],
    globals: {
        'ts-jest': {
            tsConfig: './tsconfig.json'
        }
    }
}
