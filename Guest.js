let attemps = 0;
let random_Number = 0;
const ids = [1,2,3,4];
var i =0;
let id = document.getElementById(ids[0]);
var userGuest = document.getElementById('up');
var op = document.getElementById('op');
let og = document.getElementById('gv');
function generat()
{
    random_Number = Math.floor((Math.random() * (100 - 0) + 0));
    attemps = 0;
//     og.innerHTML = random_Number;
}
function Check()
{
    id = document.getElementById(ids[i]);
    attemps = attemps + 1;
    if(userGuest.value > random_Number)
    {
        og.innerHTML = `${userGuest.value} value is bigger than the number.`;
        userGuest.value = "";

    }
    else if(userGuest.value < random_Number)
    {
        og.innerHTML = `${userGuest.value} value is smaller than the number.`
        userGuest.value = "";
    }
    else if(!(userGuest.value == random_Number))
    {
        userGuest.value = "";
        id.innerHTML = attemps;
    }
    else
    {
        i = i +1;
        attemps = 0;
        userGuest.value = "";
        og.innerHTML = "YOU WIN.!❤️"
    }
    op.innerHTML = attemps;
}
