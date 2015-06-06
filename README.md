# CSS my icons

> Grunt task to generate a CSS file for SVG icons used as background-image: 
> ```.icon-home{background-image:url('icons/home.svg');background:no-repeat;}```

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

## CONTRIBUTE
```shell
$ grunt
```
