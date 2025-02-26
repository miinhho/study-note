const exampleObject = new Object();

Object.defineProperty(exampleObject, 'example', {
  value: "example value",
  writable: true,
  enumerable: true,
  configurable: true
});


let person = Object.create(null);

Object.defineProperty(person, 'age', {
  value: 25,
});
Object.defineProperty(person, 'name', {
  value: 'John Doe',
});


Object.defineProperties(person, {
  email: {
    value: 'example@test.com',
  },
  birth: {
    value: '2000-01-01',
  }
});


const otherPerson = Object.create(person);

console.log(otherPerson.age);  // 25
console.log(otherPerson.name);  // John Doe
console.log(otherPerson.email);  // example@test.com
console.log(otherPerson.birth);  // 2000-01-01

export { };
