const person = {
  name: "Kodom Ali",
  isEmployed: true,
  salary: 5000,
  subjects: ["PHP", "Graphics", "Machine Learning"],
  exam: function () {
    // for (const subject of this.subjects) {
    //   return `${this.name} is participating an ${subject} exam`;
    // }
    return `${this.name} is participating an  exam`;
    // return `${this.name} is participating an ${this.subjects[2]} exam`;
  },
  hobby:{
    interest:{
      profession:["Graphics","game Development","Web Development"],
      life:{
        travel:{
          location:["Coxs-Bazar","Bandarban","Sylhet"]
        }
      }
    }
  },
  planForWeekend: function (){
   return `${this.name} after giving ${this.subjects[2]} exam he will go for visit ${this.hobby.interest.life.travel.location[2]}`;
  },
  reExam: function () {
    return this.exam();
  },
  treadDe: function(amount, tips) {
    this.salary = this.salary - amount - tips;
    return this.salary;
  },
};

const travel=person.planForWeekend();
console.log(travel);
const statusOfExam = person.reExam();
// console.log(statusOfExam);

const keysOfObject = Object.keys(person);
// console.log(keysOfObject);

const valuesOfObject = Object.values(person);
// console.log(valuesOfObject);

const pairOfObject = Object.entries(person);
// console.log(pairOfObject);

// console.log(person);
// Object.seal(person);
// Object.freeze(person);
// delete person.salary;
// person.salary=8000;
// console.log(person);

// copy of object
const badamAli = { ...person };
// console.log(badamAli);

const badamAli2 = JSON.parse(JSON.stringify(person));
// console.log(badamAli2);

const secondPerson = {
  name: "Badam Ali",
  salary: 20000,
};
// const result = person.treadDe(500,0);
// borrowing perons1 function

// const remainingSalary =person.treadDe.call(badamAli,900,100);
// console.log(remainingSalary);
const badamAliExam= person.exam.apply(secondPerson)
// console.log(badamAliExam);

const secondRemainingSalary=person.treadDe.apply(secondPerson,[450,50]);
// console.log(secondRemainingSalary);

const remainingMoney=person.treadDe.bind(secondPerson);
const result =remainingMoney(500,100);
// console.log(result);