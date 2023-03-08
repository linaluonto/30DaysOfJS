// Level 1

// 1
let challenge = '30 Days Of JavaScript';

// 2
console.log(challenge)

// 3
console.log(challenge.length)

// 4
challenge.toUpperCase()

// 5
console.log(challenge.toLowerCase())

// 6
console.log(challenge.substring(0, 2))

// 7
console.log(challenge.substring(3))

// 8
console.log(challenge.includes('Script'))

// 9
console.log(challenge.split())

// 10
console.log(challenge.split(' '))

// 11
let list = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(list.split(','))

// 12
console.log(challenge.replace('JavaScript', 'Python'))

// 13
console.log(challenge.charAt(15))

// 14
console.log(challenge.charCodeAt(11))

// 15
console.log(challenge.indexOf('a'))

// 16
console.log(challenge.lastIndexOf('a'))

// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))

// 18
console.log(sentence.lastIndexOf('because'))

// 19
console.log(sentence.search('because'))

// 20
let trimWord = '\t trim me \t'
console.log(trimWord.trim())

// 21
console.log(challenge.startsWith(3))

// 22
console.log(challenge.endsWith('Script'))

// 23
let findA = /a/gi
console.log(challenge.match(findA))

// 24
let phrase = '30 Days Of'
console.log(phrase.concat(' JavaScript'))

// 25
console.log(challenge.repeat(2))


// Level 2

// 1
console.log('The quote \'There is no exercise better for the heart than\
 reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

// 2
console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love.\
 Charity and love are the same -- with charity you give love, so don\'t just \
 give money but reach out your hand instead.\"')

//  3
let valueType = '10'
console.log(typeof valueType)
let newValue = +valueType
console.log(typeof newValue)

// 4
console.log(parseFloat('9.8'))
console.log(Math.round(parseFloat('9.8')))

// 5
let wordOne = 'python'
let wordTwo = 'jargon'
console.log(wordOne.includes('on'))
console.log(wordTwo.includes('on'))

// 6
let checkJargon = 'I hope this course is not full of jargon'
console.log(checkJargon.includes('jargon'))

// 7
console.log(Math.random() * 100)

// 8
console.log(Math.random() * 100)

// 9
console.log(Math.random() * 255)

// 10
let stringChar = 'JavaScript'
console.log(stringChar[Math.random() * 9])

// 11
console.log('1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125')

// 12
console.log(sentence.substr(31, 23))


// Level 3

// 1
let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love'
let pattern = /love/gi
console.log(love.match(pattern))

// 2
let noOfBecause = /because/gi
console.log(sentence.match(noOfBecause))

// 3
const mySentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let firstSentence = mySentence.replaceAll('%', '')
let secondSentence = firstSentence.replaceAll('&', '')
let thirdSentence = secondSentence.replaceAll('@', '')
let fourthSentence = thirdSentence.replaceAll('!', '')
let fifthSentence = fourthSentence.replaceAll('$', '')
let sixthSentence = fifthSentence.replaceAll('#', '')
let finalSentence = sixthSentence.replaceAll(';', '')
console.log(finalSentence)

// 4
let salary = 5000, annualBonus = 10000, onlineCourse = 15000
let total = `${salary + annualBonus+ onlineCourse} euros`
console.log(total)