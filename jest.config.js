module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)?$': 'babel-jest',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileTransformer.js'
  },
  // testMatch: ['<rootDir>/src/**/(*.)(spec|test).{js, jsx, ts, tsx}'],
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
  // testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/build/'],
  setupFilesAfterEnv: [
    "<rootDir>/src/setupTests.ts"
  ],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy'
  },
};
