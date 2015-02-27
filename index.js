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
      constructedBound.push(constructedPoint);
    }
    this.bounds.push(constructedBound);
  }

}

GeometryBounds.prototype.contains = function contains(dot)  {
  if(dot == null || !(this.xKey in dot) || !(this.yKey in dot)) {
    return false;
  }

  var x = parseFloat(dot[this.xKey]);
  var y = parseFloat(dot[this.yKey]);

  for(var index in this.bounds) {

    if(testInPolygon(this.bounds[index], x, y)) return true;
  }

  return false;
}

function testInPolygon(b, x, y) {
  var c = false;
  for(i = 0, j = b.length - 1; i < b.length; j = i++)  {
    if( ((b[i][1] > y) != (b[j][1] > y)) &&
        (x < (b[j][0] - b[i][0]) * (y - b[i][1]) / (b[j][1] - b[i][1]) + b[i][0]) )
      c = !c;
  }
  return c;
}

exports.GeometryBounds = GeometryBounds;
