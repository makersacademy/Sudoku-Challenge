'use strict';

var desireds = require('./desireds');

var gruntConfig = {
  env: {
      // dynamically filled
  },
  jshint: {
    options: {
      node: true, 
      jasmine: true
    },
    all: [
    'Gruntfile.js',
    './src/*.js',
    ]
  },
  webdriver: {
    options: {
        host: 'ondemand.saucelabs.com',
        port: 80,
        user: process.env.SAUCE_USERNAME,
        key: process.env.SAUCE_ACCESS_KEY,
        desiredCapabilities: process.env.DESIRED
    },
    homepage: {
        tests: ['tests/*.js']
    }
  }, 
  concurrent: {
      'test-sauce': [], // dynamically filled
  },
  mochacli: {
    options: {
      require: ['chai'],
      reporter: 'spec',
      bail: true
    },
    all: ['specs/*.js']
  },
  watch: {
    files: [
    './public/js/*.js',
    './specs/*.js',
    './tests/*.js'
    ],
    tasks: ['mochacli', 'webdriver', 'jshint']
  }
};
 
for (var i in desireds) {
  gruntConfig.env[i] = { 
    DESIRED: JSON.stringify(desireds[i])
  };
  gruntConfig.concurrent['test-sauce'].push('test:sauce:' + i);
}

module.exports = function(grunt) {

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-webdriver');

  for (var i in desireds)
    grunt.registerTask('test:sauce:' + i, ['env:' + i, 'webdriver']);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['mochacli', 'test:sauce:chrome']);
};
