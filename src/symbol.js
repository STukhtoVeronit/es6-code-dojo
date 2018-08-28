// let symbol1 = Symbol('name');
// let symbol2 = Symbol.for('name');
// console.log(symbol1);
// console.log(symbol2);
// console.log(symbol1 !== symbol2);
//
// let symbol = Symbol.for('name');// for first trying to find name
// console.log(symbol === symbol2);

// let symbol = Symbol.for();// for first trying to find name
// let name = Symbol.keyFor(symbol);
// console.log(symbol);
// console.log(name);

// let user = {
//     username: 'r2d2',
//     [Symbol.for('password')]: 'c3po'
// };
// console.log(user.password);
// console.log(Object.keys(user));
// console.log(Object.getOwnPropertyNames(user));
//
// let password = user[Symbol.for('password')];
// console.log(password);
//
// console.log(Object.getOwnPropertySymbols(user));

//well know symbol iterator ======

let object = {
    iterator: 0
    [Symbol.iterator]() {}
}