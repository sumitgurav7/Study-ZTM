class QueueNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        return this.first;
    }
    enqueue(value){
        let newNode = new QueueNode(value);
        if(this.last){
            this.last.next = newNode;
            this.last = newNode;
        }else{
            this.first = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(this.first){
            let nodeToBeDequeued = this.first;
            this.first = this.first.next;
            return nodeToBeDequeued;
        }
        return null;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  console.log(myQueue.enqueue('Joy'));
  console.log(myQueue.enqueue('Matt'));
  console.log(myQueue.enqueue('Pavel'));
  console.log(myQueue.enqueue('Samir'));
  console.log(myQueue.peek());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  console.log(myQueue.dequeue());
  
  //Joy
  //Matt
  //Pavel
  //Samir
  