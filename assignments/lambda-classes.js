// CODE here for your Lambda Classes
class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
    this.gender = attributes.gender;
  }
  speak() {
    console.log(`Hello my ${this.name} I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.speciality = attributes.speciality;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }
  grade(student, subject) {
    let grading = 0
    grading = Math.floor(Math.random() * Math.floor(student.grade > 0 ? -25 : 25));
    student.grade += grading
    console.log(`${student.name} receives a ${grading} on ${subject}`);
  }
}

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = 33;
  }
  listsSubjects() {
    console.log(`${this.name} favourite subjects are:`);
    this.favSubjects.forEach(item => console.log(item));
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }
  graduate() {
    if (this.grade > 70) {
      console.log(`Congratulations ${this.name}, you just graduated!!`);
    } else {
      console.log(`You are still ${70 -this.grade } short of the required 70%`)
    }
  }
}

class ProjectManagers extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const gabe = new Instructor({
  name: "Gabe El Batman",
  location: "Batcave",
  age: 33,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "5 minutes brak guys",
});

const giacomo = new ProjectManagers({
  name: "Giacomo Il Robin",
  location: "Italy",
  age: 23,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: "I'm proud of you guys",
  gradClassName: "WEBEU1 ?",
  favInstructor: "Gabe",
});

const patrick = new Student({
  name: "Patrick",
  location: "Luxembourg",
  age: 21,
  gender: "male",
  previousBackground: "Accounting & Management at ECG",
  className: "WEBEU2",
  favSubjects: ["Javascript", "CSS", "HTML"]
});

/*
console.log(gabe.name)
console.log(gabe.location)
gabe.demo("Pre-processors")
console.log(giacomo.name)
console.log(giacomo.age)
giacomo.grade(patrick, "CSS")
giacomo.standUp("#webeu2_giacomo")
console.log(giacomo.gradClassName)
*/