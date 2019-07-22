module.exports = (config) => {
  config.set({
    basePath: '../',
    files: [
      'lib/**/!(mocha).js',

      'src/dancer.js',
      'src/blinkyDancer.js',
      'src/init.js',

      'test/*.js',
    ],
    frameworks: ['mocha'],
    browsers: ['ChromeHeadless'],
    logLevel: config.LOG_INFO,
    singleRun: true,
    port: 9876,
  });
};
