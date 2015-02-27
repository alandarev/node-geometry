# node-geometry

[![build status][1]][2] [![dependency status][3]][4]

Collection of geometry functions implemented in JavaScript

## GeometryBounds object

Constructs an object from multiple polygons for further testing against them.

### GeometryBounds.contains(point)

Determines if the geometry point is contained in any of the geometry bounds.

*Uses [Ray Casting Algorithm][6]*

## Examples
See [test.js][5] file for examples.

https://en.wikipedia.org/wiki/Point_in_polygon

  [1]: https://secure.travis-ci.org/alandarev/node-geometry.png
  [2]: https://travis-ci.org/alandarev/node-geometry
  [3]: https://david-dm.org/alandarev/node-geometry.png
  [4]: https://david-dm.org/alandarev/node-geometry
  [5]: test.js
  [6]: https://en.wikipedia.org/wiki/Point_in_polygon#Ray_casting_algorithm
