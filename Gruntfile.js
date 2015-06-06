module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Configuration to be run (and then tested).
    cssmyicons: {
      main: {
        src: ['test/fixtures/assets/svg'],
        dest: 'tmp/icons.css'
      }
    },

    // Clean
    clean: {
      build: {
        src: ['tmp/']
      }
    },

    // Unit tests
    nodeunit: {
      tests: ['test/*.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'cssmyicons', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'test']);
};
