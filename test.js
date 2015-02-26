var assert = require('assert');
var geometry = require('./index.js');

var figure1 = [
  {
    'lat':  "0.0",
    'lng':  "0.0"
  },
  {
    'lat':  "0.0",
    'lng':  '10.0',
  },
  {
    'lat':  '10.0',
    'lng':  '10.0',
  },
  {
    'lat':  '10.0',
    'lng':  '0.0',
  }

];

test('GeometryBounds Construction', function()  {
  var gb = new geometry.GeometryBounds();
  assert.ok(gb, 'geometry bounds object was not created');
});

test('GeometryBounds with single figure', function()  {
  var gb = new geometry.GeometryBounds(figure1);
  assert.ok(gb);
});
