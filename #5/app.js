const time_gap = document.querySelector("h2");

function getClock() {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 12, 25);

    const oneday = 24 * 60 * 60 * 1000;
    const diff = christmas.getTime() - today.getTime();
    
    const diffdays = new Date();
    diffdays.setTime(diff);

    const days = Math.floor(diff / oneday);
    const hours = diffdays.getHours().toString().padStart(2, "0");
    const minutes = diffdays.getMinutes().toString().padStart(2, "0");
    const seconds = diffdays.getSeconds().toString().padStart(2, "0");

    time_gap.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);