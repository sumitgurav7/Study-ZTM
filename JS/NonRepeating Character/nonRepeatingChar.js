var input = "abcdgghjklluuuhaj";

function nRc(input = ""){
    let store = new Map();
    for(let index =0; index<input.length; index++){
        let char = input[index];
        if(store.has(char)){
           var obj = store.get(char);
           obj.isRepeating = true;
           store.set(char, obj);
        } else {
            store.set(char, {isRepeating:false, index: index});
        }
    }
    for(let char of store.entries()){
        var obje = store.get(char[0]);
        if(!obje.isRepeating){
            return obje.index;
        }
    }
    return "";
}

console.log(nRc(input));

console.log('c' - 'a');