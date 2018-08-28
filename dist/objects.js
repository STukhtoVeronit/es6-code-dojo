'use strict';

var firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@micrsoft.com';

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log('Hi, my name is ' + firstName + ' ' + lastName);
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

// Object.defineProperty(person, 'fullName', {
//     get: function () {
//         return this.firstName + ' ' + this.lastName;
//     },
//     set: function (value) {
//         this.firstName = value;
//     }
// });
console.log(person);
// person.sayHello();
//
// person.firstName;
// person['firstName'];
// person[firstName];
//
//
//
//
// function createCar(property, value) {
//     return {
//         [property]: value
//     };
// }
//
// console.log(createCar('vin', 1));