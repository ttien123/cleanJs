// Sử dụng class hoặc Object trong ES6 để làm đẹp lại đoạn code sau
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(`${this.name} is ${this.age} years old.`);
  }

  update(newName, newAge) {
    this.name = newName;
    this.age = newAge;
  }
}

const user = new User('tien', 20);
user.display();
user.update('thetien', 22);
user.display();