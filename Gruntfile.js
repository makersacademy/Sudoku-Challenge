module.exports = function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mocha_casperjs: {
      options: {
      },
      files: {
        src: ['test/**/*']
      }
    },

    jasmine_node: {
      options: {
        forceExit: true,
      },
      all: ['spec/']
    },

    jshint: {
        src: ['src/']
    },

    watch: {
      scripts: {
        files: ['src/*.js', 'spec/*.js', 'test/*.js'],
        tasks: ['jasmine_node', 'jshint', 'mocha_casperjs']
      }
    }
  });

  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-casperjs');

  grunt.registerTask('default', ['jasmine_node', 'jshint', 'mocha_casperjs']);

};
