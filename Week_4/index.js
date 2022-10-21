// LEVEL 1 
// 1 
let age = prompt('Enter your age:', '')
let result = (age >= 15) 
  ? alert('You are old enough to drive.') 
  : alert(`You are left with ${18 - age} years to drive.`); 

// 2 
let myAge = 30;
let yourAge = prompt("Enter your age:", '');
if (myAge > yourAge) {
  console.log(`I am ${myAge - yourAge} years older than you.`)
} else {
  console.log(`You are ${yourAge - myAge} years older than me.`) 
}
  
// 3 
let a = 5, b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} is less than ${b}`)
};

(a > b)
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);
  
// 4 
let num = 7;
if (num % 2 === 0) {
  console.log(`${num} is an even number`)
} else if (num % 2 === 1) {
  console.log(`${num} is an odd number`)
} else {
  console.log(`${num} is not an integer`)
}

// LEVEL 2 
// 1 
let score;
let grade;
switch (true) {
  case (score >= 80 && score <= 100):
    grade = 'A';
    break;
  case (score >= 70 && score <= 89):
    grade = 'B';
    break;
  case (score >= 60 && score <= 69):
    grade = 'C';
    break;
  case (score >= 50 && score <= 59):
    grade = 'D';
    break;
  case (score >= 0 && score <= 49):
    grade = 'F';
    break;
  default:
    grade = 'Score is not a number between 0 and 100';
  break;
}

// 2 
let month;
let season;
switch (month) {
  case 'September':
  case 'October':
  case 'November':
    season = 'Autumn';
    break;
  case 'December':
  case 'January':
  case 'February':
    season = 'Winter';
    break;
  case 'March':
  case 'April':
  case 'May':
    season = 'Spring';
    break;
  case 'June':
  case 'July':
  case 'August':
    season = 'Summer';
    break;
  default:
    season = 'Incorrect month entered';
    break;
}

// 3 
let enterDay = prompt('What is the day today?', '');
let day = enterDay.charAt(0).toUpperCase() + enterDay.slice(1).toLowerCase();
let checkDay;
switch (day) {
  case 'Monday':
  case 'Tuesday':
  case 'Wednesday':
  case 'Thursday':
  case 'Friday':
    checkDay = `${day} is a working day.`;
    break;
  case 'Saturday':
  case 'Sunday':
    checkDay = `${day} is a weekend.`;
  default:
    checkDay = `${enterDay} is not a valid day of the week.`;
    break;
}

// LEVEL 3 
// 1 
let inputMonth;
let monthofYear = inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1).toLowerCase();
let noOfDays;
let year = 2012;
switch (monthofYear) {
  case 'September':
  case 'April':
  case 'June':
  case 'November':
    noOfDays = `${monthofYear} has 30 days.`;
    break;
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    noOfDays = `${monthofYear} has 31 days.`;
    break;
  case 'February':
    noOfDays = `${monthofYear} has 28 days.`;
    break;
  default:
    noOfDays = 'Invalid month entered.'
}
if ((year % 4 === 0) && (monthofYear === 'February')) {
  noOfDays = `${monthofYear} has 29 days.`;
}