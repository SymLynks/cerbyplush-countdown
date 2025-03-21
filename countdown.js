const countdownDate = new Date('2025-05-10T00:00:00').getTime();
const countdownElement = document.querySelector('.countdown');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('.days').innerText = days;
    document.querySelector('.hours').innerText = hours;
    document.querySelector('.minutes').innerText = minutes;
    document.querySelector('.seconds').innerText = seconds;

    if (distance < 0) {
        document.querySelector('.countdown').innerHTML = 'Die Lieferung ist da!';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();