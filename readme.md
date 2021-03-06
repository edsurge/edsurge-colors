# edsurge-colors 0.2.0

EdSurge Colors

#### Stats

525 | 70 | 70
---|---|---
bytes | selectors | declarations

## Installation

#### With [npm](https://npmjs.com)

```
npm install --save-dev edsurge-colors
```

#### With Git

```
git clone https://github.com/edsurge/edsurge-colors
```

## Usage

#### Using with [PostCSS](https://github.com/postcss/postcss)

Import the css module

```css
@import "edsurge-colors";
```

Then process the CSS using the [`tachyons-cli`](https://github.com/edsurge/tachyons-cli)

```sh
$ npm i -g tachyons-cli
$ tachyons-cli path/to/css-file.css > dist/t.css
```

#### Using the CSS

The built CSS is located in the `css` directory. It contains an unminified and minified version.
You can either cut and paste that css or link to it directly in your html.

```html
<link rel="stylesheet" href="path/to/module/css/edsurge-colors">
```

#### Development

The source CSS files can be found in the `src` directory.
Running `$ npm start` will process the source CSS and place the built CSS in the `css` directory.

## The CSS

```css
.bg-es-dark-green-3 { background-color: #004c3d; }
.bg-es-dark-green-2 { background-color: #006651; }
.bg-es-dark-green-1 { background-color: #007f65; }
.bg-es-green { background-color: #00997a; }
.bg-es-light-green-1 { background-color: #00b28e; }
.bg-es-light-green-2 { background-color: #00cca3; }
.bg-es-light-green-3 { background-color: #00e5b7; }
.bg-es-light-green-4 { background-color: #00ffcb; }
.bg-es-dark-gray-2 { background-color: #404142; }
.bg-es-dark-gray-1 { background-color: #6d6e71; }
.bg-es-gray { background-color: #939598; }
.bg-es-light-gray-1 { background-color: #bcbec0; }
.bg-es-light-gray-2 { background-color: #d1d3d4; }
.bg-es-light-gray-3 { background-color: #e6e7e8; }
.es-dark-green-3 { color: #004c3d; }
.es-dark-green-2 { color: #006651; }
.es-dark-green-1 { color: #007f65; }
.es-green { color: #00997a; }
.es-light-green-1 { color: #00b28e; }
.es-light-green-2 { color: #00cca3; }
.es-light-green-3 { color: #00e5b7; }
.es-light-green-4 { color: #00ffcb; }
.es-dark-gray-2 { color: #404142; }
.es-dark-gray-1 { color: #6d6e71; }
.es-gray { color: #939598; }
.es-light-gray-1 { color: #bcbec0; }
.es-light-gray-2 { color: #d1d3d4; }
.es-light-gray-3 { color: #e6e7e8; }
.border-es-dark-green-3 { border-color: #004c3d; }
.border-es-dark-green-2 { border-color: #006651; }
.border-es-dark-green-1 { border-color: #007f65; }
.border-es-green { border-color: #00997a; }
.border-es-light-green-1 { border-color: #00b28e; }
.border-es-light-green-2 { border-color: #00cca3; }
.border-es-light-green-3 { border-color: #00e5b7; }
.border-es-light-green-4 { border-color: #00ffcb; }
.border-es-dark-gray-2 { border-color: #404142; }
.border-es-dark-gray-1 { border-color: #6d6e71; }
.border-es-gray { border-color: #939598; }
.border-es-light-gray-1 { border-color: #bcbec0; }
.border-es-light-gray-2 { border-color: #d1d3d4; }
.border-es-light-gray-3 { border-color: #e6e7e8; }
.fill-es-dark-green-3 { fill: #004c3d; }
.fill-es-dark-green-2 { fill: #006651; }
.fill-es-dark-green-1 { fill: #007f65; }
.fill-es-green { fill: #00997a; }
.fill-es-light-green-1 { fill: #00b28e; }
.fill-es-light-green-2 { fill: #00cca3; }
.fill-es-light-green-3 { fill: #00e5b7; }
.fill-es-light-green-4 { fill: #00ffcb; }
.fill-es-dark-gray-2 { fill: #404142; }
.fill-es-dark-gray-1 { fill: #6d6e71; }
.fill-es-gray { fill: #939598; }
.fill-es-light-gray-1 { fill: #bcbec0; }
.fill-es-light-gray-2 { fill: #d1d3d4; }
.fill-es-light-gray-3 { fill: #e6e7e8; }
.stroke-es-dark-green-3 { stroke: #004c3d; }
.stroke-es-dark-green-2 { stroke: #006651; }
.stroke-es-dark-green-1 { stroke: #007f65; }
.stroke-es-green { stroke: #00997a; }
.stroke-es-light-green-1 { stroke: #00b28e; }
.stroke-es-light-green-2 { stroke: #00cca3; }
.stroke-es-light-green-3 { stroke: #00e5b7; }
.stroke-es-light-green-4 { stroke: #00ffcb; }
.stroke-es-dark-gray-2 { stroke: #404142; }
.stroke-es-dark-gray-1 { stroke: #6d6e71; }
.stroke-es-gray { stroke: #939598; }
.stroke-es-light-gray-1 { stroke: #bcbec0; }
.stroke-es-light-gray-2 { stroke: #d1d3d4; }
.stroke-es-light-gray-3 { stroke: #e6e7e8; }
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Authors

- [Shu Uesugi](http://chibicode.com)

## License

MIT

