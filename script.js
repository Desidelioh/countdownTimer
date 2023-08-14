let daysDigit = document.getElementById("days");
let hoursDigit = document.getElementById("hours");
let minsDigit = document.getElementById("minutes");
let secondsDigit = document.getElementById("seconds");


let newYear = '1 Jan 2024'

function timeLeft() {
    let newYearsEve = new Date(newYear);
    let currentDay = new Date();
    let sumSeconds = new Date(newYearsEve - currentDay) / 1000;
    let days = Math.floor(sumSeconds / 3600 / 24);
    let hours = Math.floor(sumSeconds / 3600 % 24);
    let minutes = Math.floor(sumSeconds / 60) % 60;
    let seconds = Math.floor(sumSeconds) % 60;

    console.log(days, hours, minutes, seconds);

    daysDigit.innerHTML = days;
    hoursDigit.innerHTML = hours;
    minsDigit.innerHTML = minutes;
    secondsDigit.innerHTML = seconds;
}

timeLeft();

setInterval(timeLeft, 1000);






