module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: 'build',
      reporters: [
        { type: 'text-summary' },
        { type: 'html', subdir: 'coverage' }
      ],
    },
    files: [
      'tests.webpack.js'
    ],
    frameworks: [
      'mocha',
      'chai'
    ],
    plugins: [
      'karma-chai',
      'karma-coverage',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-webpack',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack'],
    },
    reporters: ['progress', 'coverage'],
    webpack: {
      module: {
        preLoaders: [
          {
            test: /\.js$/,
            exclude: /(src|bower_components|node_modules)/,
            loaders: ['babel'],
          },
          {
            test: /\.js$/,
            include: /(src)/,
            loaders: ['isparta'],
          },
        ],
      },
    },
  });
};
