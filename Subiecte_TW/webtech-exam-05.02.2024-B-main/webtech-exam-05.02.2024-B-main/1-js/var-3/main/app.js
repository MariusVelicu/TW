class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    walk() {
      return `${this.firstName} ${this.lastName} is walking`;
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, faculty) {
      super(firstName, lastName);
      this.faculty = faculty;
    }
  
    study() {
      return `${this.firstName} ${this.lastName} is studying at ${this.faculty}`;
    }
  }
  
  const app = {
      Person, 
      Student
  };
  
  module.exports = app;
  