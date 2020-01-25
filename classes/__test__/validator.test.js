'use strict';

const validator = require('../validator.js');

let str = 'yes';
let num = 1;
let arr = ['a'];
let obj = {x:'y'};
let func = () => {};
let bool = false;
let validatorClass = new validator(str , num , arr ,obj , func , bool) ;
describe('validator module performs basic validation of', () => {


    
    
 
  it('strings', () => {
      let str = 'hello'
    expect(validatorClass.isString(str)).toBeFalsy();
  });

  it('numbers', () => {
    let num = 6 ;
    expect(validatorClass.isNum(num)).toBeFalsy();
  });

  it('arrays', () => {
    let arr =['hello',5];
    expect(validatorClass.isObjest(arr)).toBeFalsy();
  });

  it('objects', () => {
    let obj = {name : 'goorob'};
    expect(validatorClass.isObjest(obj)).toBeFalsy();
  });

  it('booleans', () => {
    let bool = false ;
    expect(validatorClass.isBooleen(bool)).toBeFalsy();
  });

  it('functions', () => {
    let func = () => {};
    expect(validatorClass.isObjest(func)).toBeFalsy();
  });

});

describe('validator module performs complex validations', () => {
    let newObj= new validator() 
//   it('validates if the input is function ', () => {
    newObj = {
        id:38,
        name:'Freddy McCoder',
        age: 20 ,
        children:[],
      };
    expect(newObj.isObjest(newObj)).toBeTruthy();
  });
//   it('validates if theres a key ', () => {
//     const fred = {
//         id:38,
//         name:'Freddy McCoder',
//         age: 20 ,
//         children:[],
//       };
//     expect(validator.isThereKeys(fred)).toBeTruthy();
//   });
//   it('validates the proper types of object properties', () => {
    
//     const fred = {
//       id:38,
//       name:'Freddy McCoder',
//       age: 20 ,
   
//     };
  
//     expect(validator.validateObjValueType(fred)).toBeTruthy();
//   });

//   it('validates the proper types of object properties', () => {
    
//     const fred = {
//       id:38,
//       name:'Freddy McCoder',
//       age: 20 ,
//       children:[],
//     };
//     expect(validator.isThereValues(fred)).toBeTruthy();
//   });

//   it('validates the types of values contained in an array', () => {
//     const fred = {
//       id:38,
//       name:'Freddy McCoder',
//       age: 20 ,
//       children:[],
//     };
//     expect(validator.validateObjValueIfArr(fred.children)).toBeTruthy();
//   });

//   it('validates a value array against an approved list', () => {
//     const fred = {
//       id:38,
//       name:'Freddy McCoder',
//       age: 20 ,
//       children:[],
//     };
//     expect(validator.arrHasAnValues(fred)).toBeFalsy();
//   });

//   // TODO: Cover so, so many more cases

// });