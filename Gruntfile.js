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
      './specs/*.js'
      ], 
      tasks: ['mochacli', 'jshint']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-cli');
  grunt.registerTask('default', ['watch']);
};
