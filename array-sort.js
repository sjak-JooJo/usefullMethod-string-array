const numbers = [4,9,6,5,3,7];
const sortedNumbers = numbers.sort();

// console.log(sortedNumbers);

const friends = ['kabila', 'josim', 'razzak', 'anwar', 'depjol', 'badsah'];
//console.log(friends.sort());
//console.log(friends.reverse());

// number sorting fun

const bigNubmers = [55, 66, 58, 81, 92, 9 ,6, 37, 13, 2];
const sortedBigNumbers = bigNubmers.sort(function(a, b){
    return a-b;
});
console.log(sortedBigNumbers);
