const numbers = [2,7,10,5];
const numbers2= numbers.map((num)=>num/7);
// console.log(numbers2);

const squareNumbers = numbers.map((num)=>Math.round(Math.sqrt(num)));
// console.log(squareNumbers);

const kvArray = [
    {key:1,value:10},
    {key:2,value:15},
    {key:3,value:20}];
// same name is important
const reformattedArray = kvArray.map(({key,value})=>({[key]:value}));
// console.log(reformattedArray);
// console.log(kvArray);


//using for each
const result = numbers.forEach(number => {
//  console.log(number*2);
});


// filter
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result2 = words.filter((word)=>word.length<6);
// console.log(result2);

// find which return only the first element from an array
const result3=numbers.find(number=>number<5);
// console.log(result3);

// reduce
const sumOfNumbers=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sumOfNumbers);
