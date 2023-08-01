// LEVEL 1
// 1
let emptyArr = new Array();
console.log(emptyArr)

// 2
const myArr = [23, 'The Bench', 'The Law', false, undefined, 99]
console.log(myArr)

// 3
console.log(myArr.length)

// 4
console.log(myArr[0])
console.log(myArr[myArr.length / 2])
console.log(myArr[myArr.length - 1])

// 5
 const mixedDataTypes = [true, 'Javascript', 101, [1, 2, 3], 'Hello', false];
console.log(mixedDataTypes.length);

//6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//7
console.log(itCompanies);

//8
console.log(itCompanies.length)

//9
console.log(itCompanies[0]);
console.log(itCompanies[3]);
console.log(itCompanies[6]);

//10
for (let company of itCompanies) {
    console.log(company);
}

//11
for (company of itCompanies) {
    company = company.toUpperCase();
    console.log(company);
}

//12
let newArray = itCompanies.slice(0, 6);
console.log(newArray.join() + ' and '+ itCompanies[6] + 'are big IT companies');

//13
let isCompany = 'facebook';
isCompany = isCompany.charAt(0).toUpperCase() + isCompany.slice(1);
let findCompany = itCompanies.includes(isCompany);
switch(findCompany){
    case true:
        console.log(isCompany)
        break
    case false:
        console.log('Company not found')
}

//14
let companiesWithMultipleO = [];
for(company of itCompanies) {
    if (company.includes('oo')) {
        companiesWithMultipleO = company;
    } else continue
    console.log(companiesWithMultipleO);
}

//15
console.log(itCompanies.sort());

//16
console.log(itCompanies.reverse());

//17
console.log(itCompanies.slice(0, 3));

//18
console.log(itCompanies.slice(4));

//19
console.log(itCompanies.slice(itCompanies.length / 2, 4));

//20
console.log(itCompanies.splice(0, 1));

//21
console.log(itCompanies.splice(2, 2));

//22
console.log(itCompanies.splice(itCompanies.length - 1, 1));

//23 
console.log(itCompanies.splice(0));


//LEVEL 2
//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
shoppingCart.splice(4, 1);
shoppingCart.splice(3, 1, 'Green Tea');
console.log(shoppingCart);


//LEVEL 3
//1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());

let minAge = ages[0];
console.log(minAge);

let maxAge = ages[ages.length - 1];
console.log(maxAge);

let medianAge;
if (ages.length % 2 == 1) {
    medianAge = ages[ages.length / 2];
} else if (ages.length % 2 == 0) {
    let medianAgeSum = ages[ages.length / 2] + ages[(ages.length / 2) + 1];
    medianAge = medianAgeSum / 2;
}
console.log(medianAge);

let averageAge;
let ageSum = 0;
for (let age of ages) {
    ageSum += age;
}
averageAge = ageSum / ages.length
console.log(averageAge);

let ageRange = maxAge - minAge;
console.log(ageRange);

let minAverage = minAge - averageAge;
let maxAverage = maxAge - averageAge;
console.log(Math.abs(minAverage));
console.log(Math.abs(maxAverage));

let countries;     
//The countries array is a comprehensive list and can be found in the project's github.
countries.slice(0, 10);

//2
let middleCountry;
if (countries.length % 2 == 1) {
    middleCountry = countries[countries.length/ 2];
} else if (countries.length % 2 == 0) {
    middleCountry = countries[countries.length / 2] + ', ' + countries[(countries.length / 2) + 1];
};

//3
let countriesOne;
let countriesTwo;
if (countries.length % 2 == 0) {
    countriesOne = countries.slice(0, countries.length / 2);
    countriesTwo = countries.slice(countries.length / 2);
} else if (countries.length % 2 == 1) {
    countriesOne = countries.slice(0, (countries.length / 2) + 1);
    countriesTwo = countries.slice((countries.length / 2) + 1);
};