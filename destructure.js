const person = {
  name: "John",
  title: "Creative Designer",
  isEmployed: true,
  salary: 5000,
  subjects: ["PHP", "Graphics", "Machine Learning"],
};

const { name, title, ...balance } = person;
/*
console.log(name);
console.log(title);
console.log(balance);
*/

const numbers= [10,20,30,40,50];
const [a,b,...rest]=numbers;
console.log("a = ",a);
console.log("b = ",b);
console.log("rest = ",rest);