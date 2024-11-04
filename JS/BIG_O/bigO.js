const {performance} = require('perf_hooks');
let fishes = ['nemo', 'scarlet', 'some', 'random', 'shit'];
const large = new Array(10000000).fill('test');
fishes = [...fishes, large];
const findNemoByFor = (input) => {
    const t0 = performance.now();
    for(let iter = 0; iter < input.length; iter++){
        if(input[iter] === 'nemo'){
            console.log('found nemo in arrow');
            break;
        }
    }
    const t1 = performance.now();
    console.log('performance= ' + (t1-t0) + ' Milliseconds')
}

const findNemoByIncludes = (input) => {
    const t0 = performance.now();  
        if(input.includes('nemo')){
            console.log('found nemo in includes');
        }
    const t1 = performance.now();
    console.log('performance= ' + (t1-t0) + ' Milliseconds')
}



findNemoByFor(fishes); //5.67 ms

//findNemoByIncludes(fishes); //5.065 ms
