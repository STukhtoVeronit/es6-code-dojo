let xmen = ['Cyclops', 'Wolverine', 'Rouge'];
//
// console.info('\nfor');
// for (let index = 0; index < xmen.length; index+=1){
//     console.log(xmen[index]);
// }
//
// console.info('\nfor...in');
// for (let key in xmen){
//     console.log(xmen[key]);
// }
//
// console.info('\n forEach');
// xmen.forEach(xman => console.log(xman));
//
// console.info('for...of');
// for (let xman in xmen){
//     console.log(xman);
// }
//
// let iterator = xmen[Symbol.iterator]();
//
// let next = iterator.next();
//
// while (!next.done){
//     console.log(next.value);
//     next = iterator.next();
// }
//
// let idGenerator = {
//     generate(){
//         return this[Symbol.iterator]();
//     },
//     [Symbol.iterator] () {
//         let count = 0;
//         return {
//             next(){
//                 let value = Math.ceil(Math.random() * 100);
//                 let done = count > 10;
//                 count += 1;
//                 return {value, done };
//             }
//         };
//     }
// };
//
// let random = idGenerator.generate();
// console.log(random.next().value);

class ArrayIterator {
    constructor(array){
        this.array = array.map(item => item).sort();
        this.index = 0;
    }
    next() {
        let result = {value: undefined, done: true};

        if (this.index < this.array.length){
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;

    }

}

class TaskList {
    constructor(){
        this.tasks = [];
    }

    addTask(...tasks) {
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator](){
       return new ArrayIterator(this.tasks);
    }
}

// let taskList = new TaskList();
//
// taskList.addTask('Check internet connection', 'Make coffee', 'Write a message to N');
//
// for (let task of taskList){
//     console.log(task);
// }

