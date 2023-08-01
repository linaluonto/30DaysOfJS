//1
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
];

//2
console.log(webTechs.length);

//5
switch (webTechs.includes('Sass')) {
    case true:
        console.log('Sass is a CSS preprocess');
        break
    case false:
        webTechs.push('Sass')
        console.log(webTechs);
        break
};  

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack)