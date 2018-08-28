'use strict';

var staticLangeages = ['C', 'C++', 'Java'];
var dynamicLangeages = ['JS', 'PHP', 'RUby'];

var langeages = [].concat(staticLangeages, ['C#'], dynamicLangeages, ['Python']);

console.log(langeages);

function add(x, y, z) {
    console.log(x + y + z);
}
var numbers = [1, 3, 5];
add.apply(undefined, numbers);