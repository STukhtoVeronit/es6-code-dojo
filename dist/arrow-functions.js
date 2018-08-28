'use strict';

var add = function add(x, y) {
    return x + y;
};
var square = function square(x) {
    return x * x;
};
var gma = function gma() {
    return 43;
};

var log = function log() {
    return console.log(new Date().getDate());
};

var multiply = function multiply(x, y) {
    return x + y;
};

(function () {
    console.log('eifi');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var sum = 0;

numbers.forEach(function (num) {
    return sum += num;
});
console.log(numbers.map(function (num) {
    return num * num;
}));
console.log(sum);

var person = {
    name: 'bod',
    greet: function greet() {
        var _this = this;

        setTimeout(function () {
            console.log('hello ' + _this.name);
            console.log(_this);
        }, 2000);
    }
};
person.greet();