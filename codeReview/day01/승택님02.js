function setList(list) {
    const len = Math.floor((Math.random() * 5) + 5);

    for(let i = 0; i < len; i++) {
        const num = Math.floor((Math.random() * 99)+1);
        if(!list.includes(num)) { list.push(num); }
    }

    return list;
}

function StackList(stack, input, count) {
    stack.push(input);

    if(stack.length == 4) {
        for(let j = 0; j < 4; j++) {
            console.log(`[Stack] List >> ${stack}`);
            stack.pop();
        }
        console.log(`[Stack] Count >> ${count}`);
        count++;
    }
}

function QueueList(queue, input, count) {
    queue.push(input);

    if (queue.length == 4) {
        for (let j = 0; j < 4; j++) {
            console.log(`[Queue] List >> ${queue}`);
            queue.reverse();
            queue.pop();
            queue.reverse();
        }
        console.log(`[Queue] Count >> ${count}`);
        count++;
    }
}
  

function main(list) {
    let stackCount = 1;
    let queueCount = 1;

    list = setList(list);
    console.log(list);

    let stack = [];
    console.log("Stack!");
    list.forEach(element => {
        stackCount = StackList(stack, element, stackCount);
    });


    let queue = [];
    console.log("Queue!");
    list.forEach(element => {
        queueCount = QueueList(queue, element, queueCount);
    });
}

let list = [];
main(list);