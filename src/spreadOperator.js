let staticLangeages = ['C', 'C++', 'Java'];
let dynamicLangeages = ['JS', 'PHP', 'RUby'];

let langeages = [...staticLangeages, 'C#', ...dynamicLangeages, 'Python'];

console.log(langeages);

function add(x, y, z) {
    console.log(x + y +z);
}
let numbers = [1, 3 , 5];
add(...numbers);