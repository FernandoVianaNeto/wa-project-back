module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!**/node_modules/**',
  ],
  coverageDirectory: './coverage',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$$': 'ts-jest',
  },
  coverageReporters: [
    'html',
    'text-summary',
    'json-summary',
    'text',
    'lcov',
    'clover',
    'cobertura',
  ],
  coveragePathIgnorePatterns: ['.module.ts'],
};
