(function () {
  var colors = {
    'es-dark-green-3': '#004c3d',
    'es-dark-green-2': '#006651',
    'es-dark-green-1': '#007f65',
    'es-green': '#00997a',
    'es-light-green-1': '#00b28e',
    'es-light-green-2': '#00cca3',
    'es-light-green-3': '#00e5b7',
    'es-light-green-4': '#00ffcb',

    'es-dark-gray-2': '#404142',
    'es-dark-gray-1': '#6d6e71',
    'es-gray': '#939598',
    'es-light-gray-1': '#bcbec0',
    'es-light-gray-2': '#d1d3d4',
    'es-light-gray-3': '#e6e7e8'
  }

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = colors
  } else {
    window.colors = colors
  }
})()
