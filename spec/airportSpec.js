describe('Airport: ', function(){
  var airport, fakePlane;

  beforeEach(function(){
    airport = new Airport
    fakePlane = new Plane
    weather = new Weather

  })

  describe('#hanger- ', function(){
    it('can receive one plane', function(){
      fakePlane.land();
      airport.accept(fakePlane);
      expect(airport.hanger).toContain(fakePlane);
    })

    it('can release one plane', function(){
      fakePlane.land();
      airport.accept(fakePlane);
      airport.release(fakePlane, weather.notStormy());
      expect(airport.hanger).not.toContain(fakePlane);
    })
  })

  describe("#weather- ", function(){

    it('planes grounded when stormy', function(){
      fakePlane.land();
      airport.accept(fakePlane);
      expect(airport.release(fakePlane, weather)).toContain('Error: Weather is stormy!')
    })
  })


})
