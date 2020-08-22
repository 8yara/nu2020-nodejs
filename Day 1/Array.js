let fruits=["banana","Mango","apple","Orange"];
console.log(fruits.length);
let len=fruits.length;
console.log(fruits[0]);//banana
console.log(fruits[fruits.length-1]);//orange
fruits.push("grapes");//add element to the end of the array
console.log(fruits[fruits.length-1]);
let last=fruits.pop();//removes last element"grapes"
console.log(fruits[len-1]+" "+last);
let first=fruits.shift();//removes first element
console.log(first);//banana
fruits.unshift('strawberry');//add to the beg.
console.log(fruits[0]);
let pos=fruits.indexOf('Mango');//find the index of word
console.log(pos);
let x=fruits.splice(pos,1)//remove from pos no of elements
let cop=fruits.slice();//makes copy
for(i=0;i<fruits.length;i++)
{console.log(cop[i]);}