/**
 * class Task {
        constructor() {}
        add(fn, context, …args) {}
        run() {}
        stop() {}
    }

    满足：
    function task1(next) {
        setTimeout(() => {
            console.log(1)
            next()
        }, 1000)
    }
    function task2(next, b) {
        setTimeout(() => {
            console.log(b)
            next()
        }, 1000)
    }

    let task = new Task()
    task.add(task1).add(task2, null, 3)
    task.run()
    备注：当任务函数执行 next 的时候，会跳转到下一个任务函数执行
 */

class Task {
    constructor() {
        this.taskList = []
        this.isRun = false
    }
    add(fn, context, ...args) {
        this.taskList.push(() => {
            fn.call(context, this.next.bind(this), ...args)
        })

        return this
    }
    run() {
        this.isRun = true
        this.taskDo()
    }
    taskDo () {
        if (this.taskList.length == 0) {
            return
        }
        this.taskList[0]()
        this.taskList.shift();
    }
    stop() {
        this.isRun = false
    }
    next () {
        if (this.isRun) {
            this.taskDo()
        }
    }
}

function task1(next) {
    setTimeout(() => {
        console.log('task1', 1)
        next()
    }, 1000)
}
function task2(next, b) {
    setTimeout(() => {
        console.log('task2', b)
        next()
    }, 1000)
}

let task = new Task()
task.add(task1).add(task2, null, 3)
task.run()