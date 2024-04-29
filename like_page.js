const stopwatch = document.getElementById('stopwatch');

function updateStopwatch() {
    const now = new Date();
    const startDate = new Date('2024-01-24T00:00:00');
    const elapsedTime = now - startDate;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    const formattedTime = `${days} dana, ${hours} sati, ${minutes} minuta, ${seconds} sekundi`;

    stopwatch.textContent = formattedTime;
}

setInterval(updateStopwatch, 1000);

document.getElementById("yesBtn").addEventListener("click", function () {
    window.location.href = "out_page.html";
});
document.getElementById("idkBtn").addEventListener("click", function () {
    window.location.href = "out_page.html";
});
document.getElementById("noBtn").addEventListener("click", function () {
    window.location.href = "sad_page.html";
});