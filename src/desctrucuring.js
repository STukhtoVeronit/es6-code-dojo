// let languages = ['JavaScript', 'PHp', 'Phuton', "Tuby"];
//
// let js, php, py, rb;
// [js, php, py, rb] = languages;
// //[destutive part] = array
// console.log (js, php, py, rb);
//
// let [js, php, py, rb] = ['JavaScript', 'PHp', 'Phuton', "Tuby"];
// //[destutive part] = array
// console.log (js, php, py, rb);

// let scores = [3,4,5,55];
// let [low, mid, high, random] = scores;
// console.log(low, mid, high, random);
//
// [scores[0], scores[1]] = [scores[1], scores[0]];
// console.log(scores);

// desctructuring Objects ===

let person = {
    firstName: 'Jhon',
    lastName: 'Sausage',
    social: {
        facebook: 'jss',
        twitter: 'jsasu'
    }
};

let {firstName: first, lastName: last, social: {facebook: fb}, age = 25} = person;

console.log(first, last, age, fb);