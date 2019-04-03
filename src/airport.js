function Airport() {
  this.hanger = []
}

// Add values to array
Airport.prototype.accept = function(plane) {
  if (plane.isLanded){
    this.hanger.push(plane);
  } else {
    return 'Error: Plane is still airborn!'
  }
};

// Delete values from array
Airport.prototype.release = function(plane, weather) {
  if (weather.isStormy){
    return 'Error: Weather is stormy!'
  } else {
  var planeRelease = this.hanger.indexOf(plane);
  this.hanger.splice(planeRelease);
  plane.landed = false;
  }
}

// returns current array
Airport.prototype.planes = function() { return this.hanger }
