module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    'packages/**/src/*.{js,ts,jsx,tsx}',
    '!**/node_modules/**',
  ],
  coverageReporters: ['text'],
  roots: ['packages/'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@unhoc/(.*)$': '<rootDir>/packages/$1/src',
  },
};
