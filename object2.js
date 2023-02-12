class Person{
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
}
const person1=new Person("John","Dhaka");
// console.log(person1);
class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }

  const obj = new Animal();
  obj.speak(); // the Animal object
  const speak = obj.speak;
  speak(); // undefined

  Animal.eat(); // class Animal
  const eat = Animal.eat;
  eat(); // undefined
