# CSS my icons

> Grunt task to generate a CSS file for SVG icons used as background-image:

```css
.icon-home{background-image:url('icons/home.svg');background:no-repeat;}
```

## [CHANGELOG](./CHANGELOG.md)

## INSTALL

```shell
$ npm install grunt-cssmyicons
```

## USAGE
```javascript
grunt.initConfig({
  cssmyicons: {
    main: {
      src: ['assets/svg'],
      dest: 'styles/icons.css'
    }
  }
});
```

## OPTIONS

#### src
Type: `Array` 
_Required_

This option is the glob of the svg folders.

#### destCSS
Type: `String` 
_Required_

Path to the CSS file to export to.

#### destIcons
Type: `String` 
_Optional_

Folder to copy icons files.

#### cwd
Type: `String` 
Default: Current working directory 
_Optional_

Used as a working directory for CSS & icons exports. 


## EXAMPLE 
```javascript
cssmyicons: {
    copyIcons: {
        src: ['test/fixtures/*'],
        cwd: 'tmp/copyIcons',
        destIcons: 'icons',
        destCss: 'icons.css'
    }
}
```

In this case the icons will be copied to ```tmp/copyIcons/icons```, the CSS file will be generated here: ```tmp/copyIcons/icons.css``` and the base path for the background-image will be ```background-image:url("icons/icon.svg")```.

## CONTRIBUTE
```shell
$ grunt
```
