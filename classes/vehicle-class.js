'use strict';

class Vehicle {
    constructor(name , wheels){
    this.name = name;
    this.wheels = wheels;
    }
    drive(){
        return 'Moving Forward';
    }
    stop(){
        return 'Stopping';
    } }
    //  for car 
    class Car extends Vehicle {
        constructor(name, wheels) {
        super(name, 4);
     } 

     run(){
         super.drive();
     }
     run(){
         super.stop()
     } }
    //  for Motorcycle 
    class Motorcycle extends Vehicle {
        constructor(name, wheels) {
        super(name, 2);
     } 

     run(){
         super.drive();

     }
     run(){
         super.stop()
     }
     wheelie(){
        return 'Wheee!';
     }
    }



module.exports = {Car , Motorcycle};