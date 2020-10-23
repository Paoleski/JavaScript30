const hands = document.querySelectorAll('.hand');
const hourHand = hands[0];
const minuteHand = hands[1];
const secondHand = hands[2];

function setDate() {
    const now = new Date();
    const second = now.getSeconds();
    const secondDegrees = ((second / 60) * 360) + 90;
    const minute = now.getMinutes();
    const minuteDegrees = ((minute/ 60) * 360) + 90;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    console.log(hourDegrees);
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}


setInterval(setDate,1000);

