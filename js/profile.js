function updateTime() {
    const now = new Date();

    // Extract UTC time components
    const utcHours = now.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
    const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
    const utcDate = now.toDateString();

    // Combine into a single string
    const utcTime = `${utcDate}, ${utcHours}:${utcMinutes}:${utcSeconds} UTC`;

    // Update the time in the HTML element
    document.getElementById("utc-time").textContent = utcTime;
}

updateTime();
setInterval(updateTime, 1000); // Update every second