function Weather() {
  this.stormy = true
}

// change object state
Weather.prototype.notStormy = function(){ return this.stormy = false }

// return object state
Weather.prototype.isStormy = function() { return this.stormy }
