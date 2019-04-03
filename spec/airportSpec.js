describe('Airport does: ', function(){
  var airport, fakePlane;

  beforeEach(function(){
    airport = new Airport
    fakePlane = new Plane
  })

  describe('#hanger', function(){
    it('can receive one plane', function(){
      fakePlane.land();
      airport.accept(fakePlane);
      expect(airport.hanger).toContain(fakePlane);
    })
  })
})
