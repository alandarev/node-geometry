
GeometryBounds = function(bounds) {
  this.xKey = "x";
  this.yKey = "y";
  this.bounds = [];
  if(!bounds) bounds = [];
  if(bounds.length > 0) {
    this.xKey = Object.keys(bounds[0])[0];
    this.yKey = Object.keys(bounds[0])[1];
  }
  for(var i in bounds)  {
    this.bounds.push(bounds[i]);
  }

}

GeometryBounds.prototype.isContained = function isContained(dot)  {

}

exports.GeometryBounds = GeometryBounds;
