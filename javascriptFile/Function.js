/*function avg(...args){
    let sum = 0;
    for(const itme of args){
        sum += itme;
    }
    return sum/args.length;
    }
console.log(avg(2,3,4,5));*/

let avg = (...args) => {
    let sum = 0;
    for(const itme of args){
        sum += itme;
    }
    return sum/args.length;
    }
console.log(avg(2,3,4,5));