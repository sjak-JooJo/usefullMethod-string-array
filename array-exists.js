function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please provie an array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutubullah', 'Lion', 'shamol', 'sabbir'];
const myBigbuddy = megaFriend(friends);
//console.log(myBigbuddy);

if(friends.indexOf('Fox') != -1){
    console.log('fox exists');
}
else{
    console.log('Fox does not exists');
}
// includes
if(friends.includes('Lion')){
    console.log('Lion exits using includes');
}

// concat
const first = [1,2,3,5];
const second = [5,6,7,9];
const combined = first.concat(second);
console.log(combined);

