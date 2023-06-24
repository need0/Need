function sum(a,b){
    return a + b;
}

let x= 3,y=8;
console.log(`${x} + ${y} = ${sum(x,y)}`);
console.log("1 + 2 = "+sum(1,2));

function greet(name){
    console.log("Welcome " +name)
}

let age = 20
if(age>=18){
    greet("\nMateo\n");
}

for(let i=0;i<5;i++){
    console.log("loop "+i);
}