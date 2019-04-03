describe ("Plane does: ", function(){
  var plane;

  beforeEach(function(){
    plane = new Plane();
  })

  describe("#lands", function() {
    it("is landed", function() {
      expect(plane.land(plane)).toBe(true)
    })
  })
})
