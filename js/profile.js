function updateTime() {
    document.getElementById("utc-time").textContent = new Date().toUTCString();
}
updateTime();
setInterval(updateTime, 1000);