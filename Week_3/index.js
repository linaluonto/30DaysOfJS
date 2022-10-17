// LEVEL 1 

// 1 
let firstName = 'Lina', lastName = 'Luonto', country = 'UAR', city = 'CityOfChaos', age = null, isMarried = false, year = 2022;
console.log(typeof(firstName))
console.log(typeof(undefined))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))

// 2 
let isEqual = (10 === '10')
console.log(isEqual)

// 3 
let isItEqual = (parseInt('9.8') == 10)
console.log(isItEqual)

// 4 (i)
let truthy1 = (null == undefined);
let truthy2 = (5 == '5');
let truthy3 = ( 'a' > 'A');
console.log(truthy1, truthy2, truthy3)

// 4 (ii)
let falsy1 = (null === undefined)
let falsy2 = (5 === '5')
let falsy3 = ('3' > 11)
console.log(falsy1, falsy2, falsy3)

// 5
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

let jar = 'jargon'
let py = 'python'
console.log(jar.length, py.length)
console.log(jar > py)

// 6 
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 4 || 10 < 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12)) 
console.log(!(4 === '4'))

let dr = 'dragon'
console.log(!((dr.includes('on')) && (py.includes('on'))))

// 7
let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
let date = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}`
console.log(date)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(Date.now() / 1000)

//LEVEL 2 
// 1 
/*let enterTriB = +prompt('What is the base of the triangle?');
let enterTriH = +prompt('What is the height of the triangle?');
let area = (0.5 * enterTriB * enterTriH); 
alert(`The area of the triangle is ${area}`); */

// 2 
/* let sideA = +prompt('Enter side a')
let sideB = +prompt('Enter side b')
let sideC = +prompt('Enter side c')
let perimeter = (sideA) + (sideB) + (sideC)
alert(`The perimeter of the triangle is ${perimeter}`) */

// 3 
/* let length = +prompt('What is the length?');
let width = +prompt('What is the width?');
let areaRec = length * width;
let perimeterTri = 2 * (length + width);
alert(areaRec);
alert(perimeterTri); */

// 4 
/*let radius = +prompt('What is the radius of the circle?')
let circleArea = Math.PI * radius * radius
let circumference = 2 * Math.PI * radius
alert(circleArea)
alert(circumference) */

// 5 
let y = '2x - 2'
let slope = +y[0]
console.log(slope)
let xIntercept = -((y[3] + y[5]) / (y[0]))
console.log(xIntercept)
let yIntercept = +(y[3] + y[5])
console.log(yIntercept)

// 6 
let x1 = 2, y1 = 2, x2 = 6, y2 = 10
let slope2 = (y2 - y1) / (x2 - x1)
console.log(slope)

// 7
console.log(slope === slope2)

// 8
let x = -3
let Y = (x * x) + (6 * x) + 9
console.log(Y)

// 9
/*let enterHours = prompt('Enter hours');
let enterRate = prompt('Enter rate per hour')
let pay = enterHours * enterRate
alert(`Your weekly earning is ${pay}`) */

// 10 
let name = 'Lina';
(name.length > 7)
  ? console.log('Your name is long')
  : console.log('Your name is short');

// 11
let firstname = 'Lina', familyName = 'Luonto';
(firstname.length > familyName.length)
  ? console.log((`Your first name, ${firstname} is longer than your family name, ${familyName}`))
  : console.log((`Your family name, ${familyName} is longer than your first name, ${firstname}`));
  
 // 12 
let myAge = 40, yourAge = 25;
(myAge > yourAge)
  ? ageDiff = (myAge - yourAge)
  : ageDiff = (yourAge - myAge);
(myAge > yourAge) 
  ? console.log(`I am ${ageDiff} years older than you`)
  : console.log(`You are ${ageDiff} older than me`);

// 13
/*let birthYear = prompt('Enter birth year:');
let userAge = 2022 - birthYear
let result = (userAge >= 18)
  ? alert(`You are ${userAge}. You are old enough to drive`)
  : alert(`You are ${userAge}. You will be allowed to drive after ${18 - userAge} years`); */

// 14
/*let noOfYears = prompt('Enter number of years you live:');
let noOfSeconds = 31557600 * noOfYears;
alert(`You lived ${noOfSeconds} seconds.`); */

// 15
let time1 = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
let time2 = `${now.getDate()}-${now.getMonth()+1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
let time3 = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
console.log(time1);
console.log(time2);
console.log(time3);

// LEVEL 3
// 1 
let hours = (now.getHours() < 10) 
  ? +('0' + now.getHours())
  : now.getHours();
let minutes = (now.getMinutes() < 10)
  ? +('0' + now.getMinutes())
  : now.getMinutes();
let time = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} ${hours}:${minutes}`;
console.log(time);