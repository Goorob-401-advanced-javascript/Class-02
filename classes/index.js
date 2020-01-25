'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const Vehicle = require('./vehicle-class.js')
const mazdaCar = new Vehicle.Car('Mazda 3');
console.log(mazdaCar.name  , mazdaCar.drive()  , mazdaCar.stop());

const harleyMotorcycle = new Vehicle.Motorcycle('Harley');
console.log( harleyMotorcycle.name , harleyMotorcycle.wheelie()  , harleyMotorcycle.stop());


const validator = require('../validator/validator.js');


