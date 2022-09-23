let val;

const today = new Date();
val = today.getHours();

function timeConvert(val) {
    let min2 = today.getMinutes();
    min1 = val * 60;
    return min1 + min2
}
    
console.log("Current hours in minute is: " + timeConvert(val) + " minutes");