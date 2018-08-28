function greet(greeting = 'hello', name = "stranger)") {
    console.log(`${greeting} ${name}`);
}
greet('hi', ' bill');
greet('hi');
greet();

function sum(){
    var sum = 0;
    Array.prototype.forEach.call(arguments, function (value) {
        sum += value;
    });
    console.log(sum);
    console.log(arguments);
}

sum(5, 7, 2, 10);