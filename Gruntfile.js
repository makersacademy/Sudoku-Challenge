module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        node: true, 
        jasmine: true
      },
      all: [
      'Gruntfile.js',
      './public/js/**/*.js',
      ]
    },
    webdriver: {
      options: {
          host: 'ondemand.saucelabs.com',
          port: 80,
          user: process.env.SAUCE_USERNAME,
          key: process.env.SAUCE_ACCESS_KEY,
          desiredCapabilities: {
              browserName: 'chrome',
              version: '27',
              platform: 'XP'
          }
      },
      homepage: {
          tests: ['tests/*.js']
      }
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
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['mochacli', 'webdriver']);
};
