
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date("2025-07-22T10:30:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        countdownElement.innerHTML = "00g 00h 00m 00s";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdownElement.innerHTML = 
        `${days.toString().padStart(2, '0')}g ` +
        `${hours.toString().padStart(2, '0')}h ` +
        `${minutes.toString().padStart(2, '0')}m ` +
        `${seconds.toString().padStart(2, '0')}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
