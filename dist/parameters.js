'use strict';

function greet() {
    var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'hello';
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "stranger)";

    console.log(greeting + ' ' + name);
}
greet('hi', ' bill');
greet('hi');
greet();

function sum() {
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });
    console.log(sum);
    console.log(arguments);
}

sum(5, 7, 2, 10);