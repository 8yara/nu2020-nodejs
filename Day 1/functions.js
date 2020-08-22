function average(x,y){
    var avg = (x+y)/2;
    return avg;
}
console.log(average(2,3));

function factorial(n){
    var fact = 1;
    for(i=n;i>=1;i--){
        fact *= i; 
    }

    return fact;
}

//n! = n*n-1*n-2*...*1

console.log(factorial(5));//output 120


const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(y => y * 2);//return a new array with a function performed on it

console.log(map1);
// expected output: Array [2, 8, 18, 32]
