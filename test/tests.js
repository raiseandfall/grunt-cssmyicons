'use strict';

var grunt = require('grunt');

exports.cssmyicons = {
  simple: function(test) {
    test.expect(1);

    test.deepEqual(grunt.file.read('tmp/simple/icons.css'), grunt.file.read('test/mocks/simple/icons.css'), 'CSS stylesheets should be equal');

    test.done();
  },
  simpleWithPrefix: function(test) {
    test.expect(1);

    test.deepEqual(grunt.file.read('tmp/simpleWithPrefix/icons.css'), grunt.file.read('test/mocks/simpleWithPrefix/icons.css'), 'CSS stylesheets should be equal');

    test.done();
  },
  copyIcons: function(test) {
    test.expect(2);

    test.deepEqual(grunt.file.read('tmp/copyIcons/icons.css'), grunt.file.read('test/mocks/copyIcons/icons.css'), 'CSS stylesheets should be equal');
    test.deepEqual(grunt.file.read('tmp/copyIcons/icons/overlay-close.svg'), grunt.file.read('test/mocks/copyIcons/icons/overlay-close.svg'), 'SVG should have been copied');

    test.done();
  }
};
