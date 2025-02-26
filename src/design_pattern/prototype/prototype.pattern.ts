const person = {
  name: 'John Doe',
  age: 25,

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
};

const personObject = Object.create(person);
console.log(personObject.name);


const personObject2 = Object.create(person, {
  email: {
    value: 'example@test.com',
    enumerable: true,
  }
});
console.log(personObject2.email);



class PersonPrototype {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }

  clone() {}
}

class Person extends PersonPrototype {
  constructor(name: string, age: number) {
    super(name, age);
  }

  clone(): Person {
    return new Person(this.name, this.age);
  }
}

const personClass = new Person('John Doe', 25);
const personClassClone = personClass.clone();
console.log(personClassClone.name);

export { };
