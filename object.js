// const person = {
//   firstName : 'Mohammed',
//   lastName :'Soudagar',
//   age : 22,
//   hobbies : ['drawing','cooding','reading books'],
//   address : {
//     city:'Bangalore',
//     state: 'karnataka'
//   }
// }
// person.email = 'mohammed@gmail.com'
// const {firstName,lastName,age,hobbies,address:{city,state}} = person;
// console.log(age);
// console.log(state);

// const user = {
//   firstName: "Mohammed",
//   lastName: "Soudagar",
//   age: "22",
//   address : {
//     city:'Bangalore',
//     state:'Karnataka'
//   }
// }
// const { firstName,lastName,age,address : {city}} = user;
// console.log(city)



// const todos = [
//   {
//    id : 1,
//    text : 'Take out trash',
//    isCompleted : true 
//   },
//   {
//     id:2,
//     text:'Meeting with parents',
//     isCompleted : true
//   },
//   {
//     id : 3,
//     text : 'Dentist appt',
//     isCompleted : false
//   }
// ];
// for(let i = 0;i < todos.length; i++){ // This is Simplet for loop
// console.log(todos[i].id)
// }
// let j=0
// while(j<todos.length){ // This is simple while loop
//   console.log(todos[j].id)
//   j++
// }
//   for(let todo of todos){ //This is for of loop
//     console.log(todo.id)
//   }
// // This is higher order array methods

// todos.forEach(function(todo){ // This is for each loop
//   console.log(todo.text);
// });
// const todoText = todos.map(function(todo){
//   return todo.id
// });
// console.log(todoText)

// const isCompleted = todos.filter(function(todo){
//   return todo.isCompleted === true;
// });
// console.log(isCompleted)




// day = 'thurdsday';
// switch(day){
//   case 'satuurday':
//     console.log('10 am');
//     break;
//   case 'sunday':
//     console.log('10 am')
//     break;
//   case 'monday':
//   case 'tuesday':
//   case 'wednesday':
//   case 'thurdsday':
//     console.log('8am')
//     break;
//   case 'friday':
//     console.log('9 am')
//     break;
//   default :
//   console.log('sleep you"re dead ')
  
// }






// It will take temperature in celsius and return degree in Kelvin
// function temperatureInCelsius(temp){
//   let kelvin = temp + 273;
//   return kelvin;
// }
// console.log(temperatureInCelsius(35))

// It will take temperature and conversion usit based on the conversion unit it will decide wether to return in Kelvin or in Celsius. 

// function temperature(temp,conversionunit){
//   ans = conversionunit === 'C' ? 'The Temperature in Celsuis is '+ (temp-273)+'C' : 'The Temperature in Kelvin is '+ (temp+273)+'K';
//   return ans;
// }
// console.log(temperature(35,'K'))
// console.log(temperature(308,'C'))

// function Student(firstName,lastName,rollNum,sex,studentAge,dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.rollNum = rollNum;
//   this.sex = sex;
//   this.studentAge = studentAge;
//   this.dob = new Date(dob);

  // this.getBirthYear = function(){
  //   return this.dob.getFullYear();
//   }
//   this.fullName= function(){
//     return `${firstName} ${lastName}`
//   }
// }
// function minAge(age){
//   return age>= 18? 'Eligible' : 'Not Eligible';
// }
// const student1 = new Student('Mohammed','Soudagar',22,'Male',22,'11-12-1999');
// const student2 = new Student('Ahmed','Soudagar',31,'Male',17,'12-12-2001');

// student1.studentAge > student2.studentAge ? console.log(student1.firstName+student1.lastName) : console.log(student2.firstName,student2.lastName);

// console.log(student1.getBirthYear())
// console.log(student2.fullName())
// console.log(minAge(student2.studentAge))

// class Student{
//   constructor(firstName,lastName,rollNum,sex,studentAge,dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.rollNum = rollNum;
//     this.sex = sex;
//     this.studentAge = studentAge;
//     this.dob = new Date(dob);
//   }
//   getBirthYear(){
//     return this.dob.getFullYear();
//   }
//   getFullName(){
//     return `${this.firstName} ${this.lastName}`
//   }
// }
// function minAge(age){
//   return age>=18?'Eligible': 'Not Eligible'
// }
// // FUll NAME OF THE STUDENT OBJECT WITH GREATER AGE!
// student1.studentAge > student2.studentAge ? console.log(student1.firstName+student1.lastName) : console.log(student2.firstName,student2.lastName);

// const student1 = new Student('Mohammed','Soudagar',22,'Male',22,'11-12-1999');
// const student2 = new Student('Ahmed','Soudagar',31,'Male',17,'12-12-2001');


// console.log(student2.getBirthYear())
// console.log(student1.getFullName())
// console.log(minAge(student1.studentAge))

let date = new Date()
class User{
  static count = 0;
  constructor(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
    User.count++;
  }
  static userCount(){
    console.log(`The total number of users are ${User.count}`);
  }
  register(){
    console.log(this.username + ' is now registered')
    console.log(`Congratulations you've been seleted for the free one month trial which is valid till ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
  }
  getPackageDetails(){
    console.log(this.username + ' is subscribed to the ' +this.package+ ' package');
  }
  renewMembership(){
    if (this.package == 'Standard'){
      console.log(`Thank You. ${this.username} your plan is upgraded, your new membership is valid till ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`)
    } else if (this.package == 'Yearly'){
      console.log(`Thank you. ${this.username} your new membership is valid till ${date.getDate()}-${date.getMonth()}-${date.getFullYear()+1}`)
    }
  }
}
class Member extends User{
  constructor(username,email,password,memeberPackage){
    super(username,email,password);
    this.package = memeberPackage;
  }
}
const user1 = new Member('Mohmyyy','iMohmy@daddy.com','12345678','Standard');
user1.register();
const user2 = new Member('Mohammed','iMohammed@email.com','12345690','Yearly');
const user3 = new Member('MD','iMD@Hotmail.com','12345612','Yearly');
const user4 = new Member('Mike_Tyson','iMikeTyson@gmail.com','MikeTheTyson','Yearly');
user4.getPackageDetails()
user4.register()
user4.renewMembership()











// let myDate = new Date();
// console.log(myDate) 
// let prevTime = new Date(1970,1,0,0,0,0)
// console.log(prevTime.getTime())
// console.log(prevTime.getDay())
// let futureTime = new Date(1970,1,0,0,0,0)
// console.log(futureTime.getTime())
// console.log(prevTime.getTime() - futureTime.getTime())

// if (prevTime.getTime() == futureTime.getTime()){
//   console.log('EQUAl')
// } else {
//   console.log("NOT EQUAL")
// }