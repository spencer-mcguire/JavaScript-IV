// CODE here for your Lambda Classes

// Base Class 

class Person{
    constructor(attr){
        this.name = attr.name,
        this.age = attr.age,
        this.location = attr.location
    }
    speak(){
        return `Hello, my name is ${this.name}. I am from ${this.location}`;
    }
}

//instructors 

class Instructor extends Person{
    constructor(attr){
        super(attr);
        this.specialty = attr.specialty,
        this.favLanguage = attr.favLanguage,
        this.catchPhrase = attr.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ` + subject;
    }
    grade(student, subject){
        return student +` receives a perfect score on ` + subject;
    }
}

// students 

class Student extends Person{
    constructor(attr){
        super(attr);
        this.previousBackground = attr.previousBackground,
        this.className = attr.className,
        this.favSubjects = attr.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`;
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ` + subject;
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ` + subject;
    }
}

//PMs

class ProjectManager extends Instructor{
    constructor(attr){
        super(attr);
        this.gradClassName = attr.gradClassName,
        this.favInstructor = attr.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to `+ channel + `, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject){
        return `${this.name} debugs ` + student `'s code on ` + subject;

    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const spencer = new Student({
    name: 'Spencer',
    location: 'Texas',
    age: 28,
    previousBackground: 'None',
    className: 'WEB25',
    favSubjects: 'lunch'
  })

  const rowdy = new ProjectManager({
    name: 'Rowdy',
    location: 'Texas',
    age: 28,
    previousBackground: 'None',
    className: 'WEB25',
    favSubjects: 'lunch'
  })

  console.log(fred.demo('js'));
  console.log(fred.grade('Spencer', 'JS-IV'));
  console.log(spencer.listsSubjects());
  console.log(spencer.PRAssignment('JS-IV'));
  console.log(rowdy.standUp('web25-austin'));
  console.log(rowdy.demo('js'));

