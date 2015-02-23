'use strict';

var gruntConfig = {
  express: {
    options: {},
    test: {
      options: {
        script: './server.js',
      }
    }
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
  mochacli: {
    options: {
      require: ['chai'],
      reporter: 'spec',
      timeout: 60000,
      bail: true
    },
    all: ['specs/*.js', 'tests/*.js']
  },
  run: {
    selenium_server: {
      options: {
        wait: false
      },
      exec: 'selenium-standalone start &>/dev/null'
    }
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
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-run');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['mochacli']);
  grunt.registerTask('fulltest', ['express:test', 'run:selenium_server', 'mochacli'
  , 'stop:selenium_server']);
};
