module.exports = {
  setupFilesAfterEnv: [
    'given2/setup',
    'jest-plugin-context/setup',
    './jest.setup',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleFileExtensions: ['jsx', 'js'],

  moduleNameMapper: {
    '^container/(.*)': '<rootDir>/src/container/$1',
    '^presentational/(.*)': '<rootDir>/src/presentational/$1',
    '^state/(.*)': '<rootDir>/src/state/$1',
    '^services/(.*)': '<rootDir>/src/services/$1',
  },
};
