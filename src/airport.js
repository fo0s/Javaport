function Airport() {
  this.hanger = []
}

Airport.prototype.accept = function(plane) {
  if (plane.isLanded){
    this.hanger.push(plane);
  } else {
    return 'Plane is not landed'
  }
};
