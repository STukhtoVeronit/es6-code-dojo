class   Task {
    constructor(title = Task.getDefaultTitle()){
        this.title = title;
        this._done = false;
        Task.count +=1;
    }
    get done(){
        return this._done === true? 'Done' : 'Did not done'
    }
    set done(value){
        if (value !== undefined && typeof  value === 'boolean'){
            this._done = value;
        } else {
            console.log('not correct value');
        }
    }
     complete(){
        this.done = true;
        console.log(`task: "${this.title}"\n - have been made` )
     }
     static getDefaultTitle(){
        return 'Do nothing';
     }
     static printTasksList(arrTasks){
        console.log(`(${Task.count})All task:`);
        arrTasks.forEach((item) => {
           console.log(item.title + ': ' + item.done);
        });
     }
}
Task.count = 0;

let tasks = [];
tasks.push(new Task('Clean the room very good'));
tasks.push(new Task('Clean coffee machine'));
tasks.push(new Task());

// Task.printTasksList(tasks);

console.log(tasks[0].done);


