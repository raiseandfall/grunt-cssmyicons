'use strict';

module.exports = function(grunt) {

  var globby = require('globby'),
    chalk = require('chalk');

  grunt.registerMultiTask('cssmyicons', 'CSS my icons.', function() {
    var glob = this.data.src[0] += '/*.svg';
    var icons = '';
    var cssDest = this.data.dest;
    var prefixPath = this.data.prefixPath || '';

    try {
      globby(glob, {}, function(err, files) {

        if (err) {
          grunt.log.write('Error:' + err);
        }

        files.forEach(function(el) {
          // Path
          var path = el.split('/'),
            file = path[path.length-1].split('.'),
            filename = file[0];
          icons += '.icon-' + filename + '{background-image: url("' + prefixPath + el + '");background-repeat:no-repeat;}';

          grunt.log.writeln(chalk.green('✔ ') + el);
        });

        // Write CSS destination file
        grunt.file.write(cssDest, icons);

        grunt.log.writeln('File ' + chalk.cyan(cssDest) + ' created.');
      });

    } catch (e) {
      grunt.log.error();
      grunt.fail.warn('Unable to create "' + cssDest + '" file (' + e.message + ').', e);
    }

  });

};
