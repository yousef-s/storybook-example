/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  moduleDirectories: ['node_modules', 'src/utils', __dirname],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/components': '<rootDir>/src/components',
    '^@/primitives/(.*)$': '<rootDir>/src/primitives/$1',
    '^@/primitives': '<rootDir>/src/primitives',
    '^@/styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@/styles': '<rootDir>/src/styles',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@/utils': '<rootDir>/src/utils',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/dist/*'],
};
