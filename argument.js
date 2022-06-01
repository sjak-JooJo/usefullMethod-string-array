function addNumbers(num1, num2){
    //console.log(arguments[3]);
    let result = 0;
    for(const num of arguments){
        console.log(num);
        result = result + num;
    }
    
    return result;
}

const sum = addNumbers(23, 13, 50, 100, 20);
// console.log(sum);

function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}

const name = getFullName('omuk', 'Hanif', 'bin', 'kakku');
console.log(name);