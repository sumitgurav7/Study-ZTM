class StackByArray {
    
    constructor(){
      this.list = [];
    }

    push(value){
            this.list.push(value);
    }

    peek(){
        return this.list[this.list.length-1];
    }

    pop(){
        let returnVal;
        if(this.list){
            returnVal = this.list[this.list.length-1];
            this.list.pop();
        }
        return returnVal;
    }

}


const myStack = new StackByArray();

myStack.push("discord");
myStack.push("udemy");
myStack.push("google");
console.assert(myStack.peek() === "google","true");
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());