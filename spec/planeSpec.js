describe ("Plane does: ", function()

  beforeEach(function(){
    plane = new plane();
  })

  describe("#lands", function() {
    it("is landed", function() {
      expect(plane.land(plane)).toBe(true)
    })
  })
})
