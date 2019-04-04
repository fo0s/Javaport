describe('Airport: ', function(){
  var airport, fakePlane, weather;

  beforeEach(function(){
    airport = new Airport
    fakePlane = new Plane
    weather = new Weather
  })

  describe('#hanger- ', function(){
    it('can receive one plane', function(){
      airport.accept(fakePlane, weather.notStormy());
      expect(airport.hanger).toContain(fakePlane);
    })

    it('can release one plane', function(){
      airport.accept(fakePlane, weather.notStormy());
      airport.release(fakePlane, weather.notStormy());
      expect(airport.hanger).not.toContain(fakePlane);
    })
  })

  describe("#weather- ", function(){

    it('planes grounded when stormy', function(){
      airport.accept(fakePlane, weather.isStormy());
      expect(airport.release(fakePlane, weather)).toContain('Error: Weather is stormy!')
    })

    it('planes cant land when stormy', function(){
      expect(airport.accept(fakePlane, weather)).toContain('Error: Weather is stormy!')
    })
  })
})
