const VehicleClass = require('../vehicle-class.js');

let typesclass = ['Class'];

describe('Vehicles Classes', () => {

  describe('Car Class', () => {

    function getCarClass(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Car('foo');
      default:
        return {};
      }
    } 

    typesclass.forEach( type => {
      
      let car = getCarClass(type);

      it(`${type}  4 wheels`, () => {
        expect(car.wheels).toEqual(4);
      });

      it(`${type} (Car) can drive`, () => {
        expect(car.drive()).toBeTruthy();
      });

      it(`${type} (Car) can stop`, () => {
        expect(car.stop()).toBeTruthy();
      });

    });
  }); 

  describe(`Motorcycle Class `, () => {

    function getMotorcycleClass(type) {
      switch(type) {
      case 'Class':
        return new VehicleClass.Motorcycle('foo');
      default:
        return {};
      }
    } 

    typesclass.forEach( type => {
      
      let motorcycle = getMotorcycleClass(type);

     
      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) has 2 wheels`, () => {
        expect(motorcycle.wheels).toEqual(2);
      });

      it(`${type} (Motorcycle) can stop`, () => {
        expect(motorcycle.stop()).toBeTruthy();
      });

      it(`${type} (Motorcycle) cannot do a wheelie`, () => {
        expect(motorcycle.wheelie()).toBeTruthy();
      });

    }); 

  });  
});