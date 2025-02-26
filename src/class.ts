class User {
  accessor name: string;
  accessor age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

User.prototype.toString = function () {
  return `User: ${this.name}, ${this.age}`;
}

let user = new User('John Doe', 25);

console.log(user.toString());  // User: John Doe, 25
console.log(user.name);  // John Doe
console.log(user.age);  // 25

export { };
