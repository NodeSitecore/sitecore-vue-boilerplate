const config = require('@node-sitecore/config');

module.exports = {
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/packages'
  ],
  collectCoverageFrom: [
    'src/Foundation/Core/**/*.{js,vue}',
    'src/Feature/**/*.{js,vue}',
    'src/Project/**/*.{js,vue}',
    '!build',
    '!src/**/registerServiceWorker.js',
    '!src/**/entry.js',
    '!src/**/common.js',
    '!src/**/entry.development.js',
    '!src/**/entry.production.js',
    '!src/**/index.js',
    '!src/**/polyfills.js',
    '!<rootDir>/node_modules/',
    '!src/Project/Hotfixes/**',
  ],

  setupFiles: [

  ],
  reporters: ['default', 'jest-junit'],

  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },

  // VUE-CLI
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '\\.(svg)$': '<rootDir>/tasks/jest/transform.svg.js',
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.common.js',
    ...config.getJestModulesMapper()
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  testMatch: [
    '**/src/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/'
};
