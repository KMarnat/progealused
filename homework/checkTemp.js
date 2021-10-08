let temp = 15
if (temp < 20)
    console.log("Cold");
else if (temp > 21 && temp < 40)
    console.log("Warm");
else console.log("Hot");
//console.log() versioon


function checkTemp(temp) {
if (temp < 20)
    return -1;
else if (temp > 21 && temp < 40)
    return 0;
else return 1;
}
//return versioon
