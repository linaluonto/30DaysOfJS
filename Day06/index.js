//1
for (let i = 0; i <= 10; i++) {
    console.log(i)
};

let num = 0;
while (num <= 10) {
    console.log(num)
    num++
};

let number = 0;
do {
    console.log(number)
    number++
} while (number <=10 );

//2
for (let j = 10; j >= 0; j--) {
    console.log(j)
}

let reverseNum = 10; 
while (reverseNum >= 0) {
    console.log(reverseNum)
    reverseNum--
}

let reverseNumber = 10;
do {
    console.log(reverseNumber)
    reverseNumber--
} while (reverseNumber >= 0)

//3
let n;
for (let k = 0; k <= n; k++) {
    console.log(k)
}

//4
let symbol = '';
for (let i = 1; i <= 7; i++) {
    symbol += '#'
    console.log(symbol)
};

//5
let numb = 0;
let numSquared;
for (let i = 0; i < 11; i++) {
    numSquared = numb ** 2
    console.log(`${numb} x ${numb} = ${numSquared}`)
    numb++
};

//6
let myNumber = 0;
let myNumberSquared;
let myNumberCubed;
let i = 0;
while (i < 11) {
    myNumberSquared = myNumber ** 2;
    myNumberCubed = myNumber ** 3;
    console.log(myNumber, myNumberSquared, myNumberCubed)
    myNumber++
    i++
}

//7
for (let i = 0; i <= 100; i++ ) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//8
for (let i = 0; i <= 100; i++ ) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

//9
for (let i = 0; i <= 100; i++ ) {
    if (i == 2 || i == 3 || i == 5 || i == 7 || (i % 2 !== 0 && i % 3 !== 0 && i % 5 !==0 && i % 7 !== 0)){
        console.log(i)
    }
}

//10
let sum = 0;
for (let i = 0; i < 101; i++){
    sum+= i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11
let sumOfEven = 0, sumOfOdd = 0;
for (let i = 0; i < 101; i++) {
    i % 2 == 0 ? sumOfEven += i : sumOfOdd += i;
}
console.log(`The sum of all evens from 0 to 100 is ${sumOfEven}. And the sum of all odds from ) to 100 is ${sumOfOdd}`);

//12
let sumOfEvens = 0, sumOfOdds = 0;
for (let i = 0; i < 101; i++) {
    i % 2 == 0 ? sumOfEvens += i : sumOfOdds += i;
}
let sumArray = [sumOfEvens, sumOfOdds]
console.log(sumArray);

//13
let randomNum = [];
for (let i = 0; i < 5; i++) {
    randomNum[i] = Math.floor(Math.random() * 100)
}
console.log(randomNum);

//14
let randomUniqueNum = [];
for (let i = 0; i < 5; i++) {
    randomNum[i] = Math.floor(Math.random() * 100)
    if (randomNum[i] !== randomNum[i -1] && randomNum[i] !== randomNum[i - 2] && 
        randomNum !== randomNum[i - 3] && randomNum !== randomNum[i - 4]) {
            randomNum[i] = randomNum[i]
    }
}
console.log(randomNum);

//15
 const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
 const charactersLength = characters.length;
 let randomString = '';
 for (let i = 0; i < 6; i++) {
    randomString += characters.charAt(Math.floor(Math.random() * charactersLength))
 }
 console.log(randomString);

//LEVEL 2
//1
let charString = '';
for (let i = 0; i < 36; i++) {
    charString += characters.charAt(Math.floor(Math.random() * 100))
}
console.log(charString)

//2
const hexNumbers = '0123456789abcdef'
let hexRandom = '#'
for (let i = 0; i < 3; i++) {
    hexRandom += hexNumbers.charAt(Math.floor(Math.random() * hexNumbers.length))
    hexRandom += hexNumbers.charAt(Math.floor(Math.random() * hexNumbers.length))
}
console.log(hexRandom)

//3
let rgbRandom = 'rgb('
for (let i = 0; i < 2; i++) {
    rgbRandom += Math.floor(Math.random() * 255)
    rgbRandom += ','
}
rgbRandom += Math.floor(Math.random() * 255)
rgbRandom += ')'
console.log(rgbRandom)

//4
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Iceland',
    'Japan',
    'Kenya'
]
let countriesUpperCase = []
for (let i = 0; i < 12; i++) {
    countriesUpperCase[i] = countries[i].toUpperCase()
}
console.log(countriesUpperCase);

//5
let countriesLength = []
for (let i = 0; i < 12; i++) {
    countriesLength[i] = countries[i].length
}
console.log(countriesLength)

//6
let countriesArray = []
for (let i = 0; i < 12; i++) {
    countriesArray[i] = [countries[i], countries[i].slice(0, 3).toUpperCase(), countries[i].length]
}
console.log(countriesArray)

//7
let landResult = countries.filter((country) => country.includes('land'))
landResult ? console.log(landResult) : console.log('All theses countries are without land')

//8
let countryWithIa = countries.filter((country) => country.endsWith('ia'))
countryWithIa ? console.log(countryWithIa) : console.log('These countries end without ia')

//9
let countryWithMostCharacters = countries[0];
for (let i = 1; i < 12; i++) {
    if (countries[i].length > countryWithMostCharacters.length) {
        countryWithMostCharacters = countries[i]
    }
}console.log(countryWithMostCharacters)

//10
let countryWith5Characters = countries.filter((country) => country.length == 5)
console.log(countryWith5Characters)

//11
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];
let longestWebTech = webTechs[0];
for (let i = 1; i < 7; i++) {
    if (webTechs[i].length > longestWebTech.length) {
        longestWebTech = webTechs[i]
    }
}console.log(longestWebTech)

//12
let webTechsArray = []
for (let i = 0; i < 7; i++) {
    webTechsArray[i] = [webTechs[i], webTechs[i].length]
}
console.log(webTechsArray)

//13
const mernStack = [
    'MongoDB',
    'Express',
    'React',
    'Node'
]
let mernAcronym = '';
for (let i = 0; i <mernStack.length; i++) {
    mernAcronym += mernStack[i].slice(0, 1)
}
console.log(mernAcronym)

//14
const techArray = [
    'HTML',
    'CSS',
    'JS',
    'React',
    'Redux',
    'Node',
    'Express',
    'MongoDB'
]
for (tech of techArray) {
    console.log(tech)
}

//15
let fruitArray = ['banana', 'orange', 'mango', 'lemon'];
let reverseFruitArray = [];
for (let i = 0; i < 4; i++) {
    reverseFruitArray[i] = fruitArray[3 - i]
}
console.log(reverseFruitArray);

//16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
printStack = `${fullStack[0]},${fullStack[1]}`;
console.log(printStack.toUpperCase());