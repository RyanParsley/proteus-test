// karma.conf.js
module.exports = function(config) {
  'use strict';
  config.set({
    basePath: '../',
    frameworks: ['jasmine'],
    preprocessors: {
      '**/*.coffee': ['coffee']
    },
    coffeePreprocessor: {
      // options passed to the coffee compiler
      options: {
        bare: true,
        sourceMap: false
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js');
      }
    },
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true
  });
};
