function Airport() {
  this.hanger = []
}

Airport.prototype.accept = function(plane) {
  if (plane.isLanded){
    this.hanger.push(plane);
  } else {
    return 'Plane is still airborn!'
  }
};

Airport.prototype.release = function(plane) {
  var planeRelease = this.hanger.indexOf(plane);
  this.hanger.splice(planeRelease);
  plane.landed = false;
}

Airport.prototype.planes = function() { return this.hanger }
