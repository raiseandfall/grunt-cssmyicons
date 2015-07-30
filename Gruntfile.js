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
      simple: {
        src: ['test/fixtures/*'],
        destCss: 'tmp/simple/icons.css'
      },
      simpleWithPrefix: {
        src: ['test/fixtures/*'],
        destCss: 'tmp/simpleWithPrefix/icons.css',
        prefixPath: 'http://cdn.mywebsite.com/'
      },
      copyIcons: {
        src: ['test/fixtures/*'],
        cwd: 'tmp/copyIcons',
        destIcons: 'icons',
        destCss: 'icons.css'
      }
    },


    // Clean
    clean: {
      build: {
        src: ['tmp/']
      }
    },

    // Watch
    watch: {
      scripts: {
        files: ['**/*.js'],
        tasks: ['test'],
        options: {
        }
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
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['jshint', 'cssmyicons', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['clean', 'test', 'watch']);
};
