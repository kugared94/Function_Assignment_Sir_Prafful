let dob = new Date("12/20/1994");
function  ageInDay(dob) {
    let month_diff = Date.now() - dob;
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);
    return age * 365
} 

console.log("Age of the date entered: " + ageInDay(dob) + " days");