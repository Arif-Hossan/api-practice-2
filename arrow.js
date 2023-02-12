// simple arrow function that wil return 89
const first = ()=> 89;
const result1 = first();
console.log(result1);
//an arrow function that will divide the input number by 7
const second = (number)=> number /7;
const result2 = second(14);
console.log(result2);
//a simple arrow function that will take two parameter ,after sum two parameter it divide dy sum result by 2
const third = (firstDigit,secondDigit)=> (firstDigit+secondDigit)/2;
const result3= third (4,4);
console.log(result3);
//an arrow function that take two parameter ,add 7 with each parameter then sum the result and check result is even or odd
const fourth = (firstDigit,secondDigit)=>{
    const result =(firstDigit+7)+(secondDigit+7);
    if(result/2==0){
        console.log(result);
        return true;
    }
    return false;
}
const result4= fourth(2,4);
console.log(result4);