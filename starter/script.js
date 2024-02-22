// let js = "amazing";
// console.log(40 + 20 + 10);

// console.log("Punit");
// console.log(23);

// let firstName = "Bobb";

// console.log(firstName);

// let punit_kumar = "PK";
// console.log(punit_kumar);

// let myfirstJob = "Developer";
// let myCurrentJob = "teacher";
// console.log(myfirstJob);
// console.log(myCurrentJob);

//variable name conventions
// let jsIsFun = true;
// console.log(jsIsFun);

// console.log(typeof true);
// console.log(typeof jsIsFun);
// // console.log(typeof 23);
// // console.log(typeof "Punit");

// jsIsFun = "YES";
// console.log(jsIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 2024;
// console.log(year);
// console.log(typeof year);

// console.log(typeof null);

// let age = 29;
// age = 30; // mutation happened here
// console.log(age);

// const birthYear = 2001;
// // birthYear = 2002; //const variables cannot be change becoz they are constant.

// // const job; // this will give an error because it is not assigned any value. use const when we dont want to change the value in the code.

// var job = "programmer";
// job = "teacher";
// console.log("My current Job is: ", job);

// lastName = "kumar";
// console.log(lastName);
// const now = 2037;
// const agePunit = now - 1991;
// const ageSarah = now - 2018;
// console.log(agePunit, ageSarah);

// const firstName = "Punit";
// const lastName = "kumar";
// console.log(firstName + " " + lastName);

// //assignment operators
// let x = 10 + 5; //15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 = 101
// x--; // x = x - 1 = 100
// console.log(x);

// //comparsion operators
// console.log(agePunit > ageSarah); // >, <, >= , <=
// console.log(ageSarah >= 46);

// const now = 2037;
// const ageA = now - 1991;
// const ageB = now - 2018;

// console.log(now - 1991 > now - 2018);
// console.log(30 - 10 - 5);

// let x, y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const avaerageAge = (ageA + ageB) / 2;
// console.log(avaerageAge);

// Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:

// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

// Your tasks:

// 1. Store Mark's and John's mass and height in variables

// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.

// Test data:

// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.

// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

// // GOOD LUCK �

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// const massMark = 95;
// const massJohn = 85;
// const markHight = 1.69;
// const johnHight = 1.88;

// const bmimark = massMark / (markHight * markHight);
// const bmiJohn = massJohn / (johnHight * johnHight);
// console.log(bmimark, bmiJohn);

// const markHigherbmi = bmimark > bmiJohn;
// console.log(markHigherbmi);

// const firstName = "Punit";
// const job = " Developer";
// const birthYear = 2001;
// const year = 2037;

// const punit =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old" + job + "!";
// console.log(punit);

// const punitNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}`;
// console.log(punitNew);

// console.log(`Just a regular string...`);
// console.log(`string \n\
// multiple lines \n\
// lines`);

// console.log(`string
// multiple
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Punit can start driving license ");
// } else {
//   const yearsLeft = 15 - age;
//   console.log(`punit is too young. wait another ${yearsLeft} years :)`);
// }

// const BirthYear = 1921;

// let century;
// if (BirthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }

// console.log(century);

// Coding Challenge #2

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const bmiMark = massMark / heightMark ** 2;
// const bmiJohn = massJohn / heightJohn ** 2;
// console.log(bmiMark, bmiJohn);

// const markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// // if (bmiMark > bmiJohn) {
// //   console.log(`Mark's BMI is higher than John's!`);
// // } else {
// //   console.log(`John's BMI is higher than Mark's!`);
// // }

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's!`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's!`);
// }

// Type conversion and coercion

//type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Punit"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// //type coercion

// console.log("I am " + 23 + " yeards old"); //string + numbers = strings
// console.log("23" + "10" + 3);
// console.log("23" / "2");

// let n = "1" + 1; //11
// n = n - 1;
// console.log(n);

//Truthy and falsy values

// 5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Punit"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 22;
// if (money) {
//   console.log("Don't spend it all");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is undefined");
// }

// const age = 18;
// if (age === 18) console.log("You just became adult:D(strict)");

// if (age === 18) console.log("You just became adult:D(loose)");

// const favourite = Number(prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//   //'23' === 23
//   // '23' == 23
//   console.log("cool 23 is a amazing number!");
// } else if (favourite === 7) {
//   console.log("Number is not 23 or 7");
// } else if (favourite === 9) {
//   console.log("Number is not 23 or 7 or 9");
// }

// if (favourite !== 23) console.log("why not 23?");

//Boolean Logic

//Basic Boolean logic: the AND, OR & NOT operator

//logical operators

// const hasDriverslicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriverslicense && hasGoodVision);
// console.log(hasDriverslicense || hasGoodVision);
// console.log(!hasDriverslicense);

// const shouldDrive = hasDriverslicense || hasGoodVision;

// // if (shouldDrive) {
// //   console.log("sarah is able to drive");
// // } else {
// //   console.log("someone else should drive");
// // }

// const isTired = true; //c
// console.log(hasDriverslicense && hasGoodVision && isTired);

// if (hasDriverslicense && hasGoodVision && !isTired) {
//   console.log("sarah is able to drive");
// } else {
//   console.log("someone else should drive");
// }

//coding challenge 3
//1
// const ScoreDolphins = (96 + 108 + 89) / 3;
// const ScoreKoals = (88 + 100 + 110) / 3;

// if (ScoreDolphins > ScoreKoals) {
//   console.log("Dolphins win the trophy");
// } else if (ScoreKoals > ScoreDolphins) {
//   console.log("Koalas win the trophy");
// } else (ScoreDolphins === ScoreKoals) {
//   console.log("Both win the trophy");
// }

// //2
// if (ScoreDolphins > ScoreKoals) {
//   console.log("Dolphins win the trophy");
// } else if (ScoreKoals > ScoreDolphins) {
//   console.log("Koalas win the trophy");
// } else (ScoreDolphins === ScoreKoals) {
//   console.log("Both win the trophy");
// }

//3
// const ScoreDolphins = (97 + 112 + 81) / 3;
// const ScoreKoals = (109 + 95 + 86) / 3;
// console.log(ScoreDolphins, ScoreKoals);

// if (ScoreDolphins > ScoreKoals && ScoreDolphins >= 100) {
//   console.log("Dolphins win the trophy");
// } else if (ScoreKoals > ScoreDolphins && ScoreKoals >= 100) {
//   console.log("Koalas win the trophy");
// } else if (
//   ScoreDolphins === ScoreKoals &&
//   ScoreDolphins >= 100 &&
//   ScoreKoals >= 100
// ) {
//   console.log("Both win the trophy");
// } else {
//   console.log("No one wins the trophy");
// }

//switch statement
const day = "wednesday";

// switch (day) {
//   case "monday":
//     console.log("Plan couse structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thrusday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend:D");
//     break;
//   default:
//     console.log("not a valid day!");
// }

// if (day === "monday") {
//   console.log("Plan couse structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || day === "thrusday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("Enjoy the weekend:D");
// } else {
//   console.log("not a valid day!");
// }

//statements and Expressions
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// console.log(`I'm `);

//The Conditional (Ternary) Operator

// const age = 23;
// age >= 29
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "water";
// }
// console.log(drink2);
// console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

//coding challenge 4
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
