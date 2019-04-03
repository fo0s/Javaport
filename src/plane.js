function Plane() {
  this.landed = false;
}

// change object state
Plane.prototype.land = function(){
  return this.landed = true;
}

// return object state
Plane.prototype.isLanded = function(){
  return this.landed;
}
