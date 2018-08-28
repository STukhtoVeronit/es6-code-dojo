class Task {
    constructor(title) {
        this.title = title;
        this.done = false;
        console.log('working');
    }
    dosomething(message = 'message'){
        console.log(message);
    }

}
class SubTask extends Task{
    constructor(title){
        super(title);
    }
}

let task = new Task('Learn js');
let subtask = new SubTask('Learn es6');

console.log(task);
console.log(subtask);