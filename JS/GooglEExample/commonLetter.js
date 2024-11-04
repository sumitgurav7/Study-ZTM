const inputArray1 = ['a', 'b', 'c', 'x'];
const inputArray2 = ['z','y', 'i'];
const inputArray3 = ['z','y', 'x'];;

const compareArrays = (largerArray = [], smallArray = [] ) => {
    const smallLen = smallArray.length;
    let mappingSet = new Set();
    for(let i = 0; i < largerArray.length; i++){
        if(smallLen > i){
            mappingSet.add(smallArray[i]);
        }
        if(mappingSet.has(largerArray[i])){
            return true
        }
    }
    return false;
}

const compareArrayForSameValue = (array1 = [], array2 = []) => {
    if(array1.length > array2.length){
        return compareArrays(array1, array2);
    } else{
        return compareArrays(array2, array1);
    }
}

console.log(compareArrayForSameValue(inputArray1, inputArray2));
console.log(compareArrayForSameValue(inputArray1, inputArray3));
