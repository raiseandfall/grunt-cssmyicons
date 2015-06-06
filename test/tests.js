'use strict';

var grunt = require('grunt');

exports.cssmyicons = {
  main: function(test) {
    test.expect(1);

    test.deepEqual(grunt.file.read('tmp/icons.css'), grunt.file.read('test/fixtures/style/icons.css'), 'file should be equal');

    test.done();
  }
};
