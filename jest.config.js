/** @type {import('jest').Config} */
const config = {
  setupFilesAfterEnv: ['./jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.js?$': 'babel-jest',
  },
};

module.exports = config;
