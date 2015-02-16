'use strict';

var gruntConfig = {
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
  mochacli: {
    options: {
      require: ['chai'],
      reporter: 'spec',
      timeout: 60000,
      bail: true
    },
    all: ['specs/*.js', 'tests/*.js']
  },
  watch: {
    files: [
    './public/js/*.js',
    './specs/*.js',
    './tests/*.js'
    ],
    tasks: ['mochacli', 'jshint']
  }
};

module.exports = function(grunt) {

  grunt.initConfig(gruntConfig);

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['mochacli']);
};
