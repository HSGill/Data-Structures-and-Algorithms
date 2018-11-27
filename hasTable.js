let user = {
    age:54,
    name:'kyle',
    magic:true,
    scream: function(){
        console.log('ahhhhhhh');
    }
}

user.age //O(1)
user.spell='aasdsadsadasd';
console.log(user);