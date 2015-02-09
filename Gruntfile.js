module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/*.js']
      }
    },

    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    },

    jshint: {
        src: ['app/**/*.js']
    },

    watch: {
      scripts: {
        files: ['app/**/*.js', 'spec/*.js', 'test/*.js', 'app/views/*.ejs'],
        tasks: ['express:test', 'jasmine_node', 'jshint', 'mocha_casperjs']
      }
    },

    express: {
      test: {
        options: {
          script: 'server.js',
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-casperjs');
  grunt.loadNpmTasks('grunt-express-server');

  grunt.registerTask('default', ['express:test', 'jasmine_node', 'jshint', 'mocha_casperjs']);
  grunt.registerTask('travis', ['express:test', 'jasmine_node', 'jshint', 'mocha_casperjs']);

};
