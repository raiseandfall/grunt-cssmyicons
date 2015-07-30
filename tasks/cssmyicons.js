'use strict';

module.exports = function(grunt) {

  var globby = require('globby'),
    chalk = require('chalk');

   grunt.registerMultiTask('cssmyicons', 'CSS my icons.', function() {
    var glob = this.data.src[0];
    var icons = '';
    var cwd = (!!this.data.cwd ? this.data.cwd + '/' : '');
    var cssDest = cwd + this.data.destCss;
    var prefixPath = this.data.prefixPath || '';
    var moveIcons = !!this.data.destIcons;
    var destIcons = this.data.destIcons;

    try {
      globby(glob, {}, function(err, files) {

        if (err) {
          grunt.log.write('Error:' + err);
        }

        files.forEach(function(el) {
          // Path
          var path = el.split('/'),
            filename = path[path.length-1],
            file = path[path.length-1].split('.'),
            fileFullPath = path.slice(0,path.length-1).join('/') + '/' + filename,
            filenameNoExt = file[0],
            relativePath = prefixPath + (moveIcons ? destIcons + '/' + filename : el);

          // Copy file if requested
          if (moveIcons) {
            var destFullPath = cwd + destIcons + '/' + filename;
            grunt.file.copy(fileFullPath, destFullPath);
          }

          icons += '.icon-' + filenameNoExt + '{background-image:url("' + relativePath + '");background-repeat:no-repeat;}';

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
