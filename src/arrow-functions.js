let add = (x, y) => {
    return x+y;
};
let square = (x) => {
    return x*x;
};
let gma = ()=> 43;

let log = () => console.log( new Date().getDate());

let multiply = (x, y) =>{
  return x+y;
};

( () => { console.log('eifi'); })();

let numbers = [1,2,3,4,5,6,7,8];
let sum = 0;

numbers.forEach(num => sum += num);
console.log(numbers.map(num => num*num));
console.log(sum);

let person = {
    name: 'bod',
    greet:  function() {
        setTimeout( () => {
            console.log('hello '+this.name);
            console.log(this);
        }, 2000);
    }
};
person.greet();