// function* generateArray(){
//     yield* [11,2,3];
// }
// let generator = function*() {
//     yield 42;
//     yield* generateArray();
//     yield 223;
// };
// function* generateArray(){
//     yield* [11,2,3];
// }
let generator = function*() {
    try {
        yield 42;
        yield 412;
        yield 4332;
    } catch (e) {
        console.log(e);
    }
};

let iterator = generator();
console.log(iterator.next());
console.log(iterator.throw(new Error('Error')));
console.log(iterator.next());
