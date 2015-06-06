# CSS my icons

> Grunt task to generate a CSS file for SVG icons used as background-image:

```css
.icon-home{background-image:url('icons/home.svg');background:no-repeat;}
```

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

### OPTIONS

#### src
Type: `Array`

This option is the glob of the svg folders.

#### dest
Type: `String`

Path to the CSS file to export to.


## CONTRIBUTE
```shell
$ grunt
```
