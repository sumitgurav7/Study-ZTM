class StackNode {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
      console.log(this.top.value);
      return this.top.value;
  }
  push(value){
      let newNode = new StackNode(value);
      newNode.next = this.top;
      this.top = newNode;
      if(!this.length){
          this.bottom = newNode;
      }
      this.length++;
  }
  pop(){
      let nodeToBepopped;
      if(this.length  < 2){
        nodeToBepopped = this.top;
        this.top = null;
        this.bottom = null;
      } else {
          nodeToBepopped = this.top;
          this.top = this.top.next;
      }
      return nodeToBepopped;
  }
  //isEmpty
}

const myStack = new Stack();

myStack.push("discord");
myStack.push("udemy");
myStack.push("google");
console.assert(myStack.peek() === "google","true");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());




//Discord
//Udemy
//google