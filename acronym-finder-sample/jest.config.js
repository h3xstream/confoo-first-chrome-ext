module.exports = {
  "transform": {
    "^.+\\.js$": "babel-jest",
  },

  "verbose": true,
  "moduleDirectories": ["node_modules", "src"],

  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js'],
  coverageReporters: ['json', 'lcov', 'html'],
};
