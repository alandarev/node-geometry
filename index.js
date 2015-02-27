var util = require('util');

GeometryBounds = function(bounds) {
  this.xKey = "x";
  this.yKey = "y";

  this.bounds = [];
  if(!bounds || !bounds[0] || !bounds[0][0]) return;

  this.xKey = Object.keys(bounds[0][0])[0];
  this.yKey = Object.keys(bounds[0][0])[1];

  for(var b1 in bounds) {
    var constructedBound = [];
    var bound = bounds[b1];
    for(var b2 in bound)  {
      var constructedPoint = [];
      var point = bound[b2];

      constructedPoint.push(parseFloat(point[this.xKey]));
      constructedPoint.push(parseFloat(point[this.yKey]));
    }
  }

}

GeometryBounds.prototype.contains = function contains(dot)  {
  if(dot == null || !(this.xKey in dot) || !(this.yKey in dot)) {
    return false;
  }

  var x = parseFloat(dot[this.xKey]);
  var y = parseFloat(dot[this.yKey]);

  console.log(this.bounds);
  for(var index in this.bounds) {

    if(testInPolygon(this.bounds[index], x, y)) return true;
  }

  return false;
}

function testInPolygon(bound, x, y) {
  var c = false;
  console.log(bound);
  for(i = 0, j = bound.length - 1; i < bound.length; j = i++)  {
    console.log(util.format("i = %d, j = %d", i, j));
  }
}

exports.GeometryBounds = GeometryBounds;
