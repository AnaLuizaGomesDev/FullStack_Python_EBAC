export function countDown () {
    const eventDate = new Date("Dec 01, 2026 19:00:00");
    const eventTimeStamp = eventDate.getTime();

    const countTheHours = setInterval(function () {
        const now = new Date();
        const currentTimeStamp = now.getTime();

        const distanceToTheEvent = eventTimeStamp - currentTimeStamp;

        const daysInMs = 1000 * 60 * 60 * 24;
        const hoursInMs = 1000 * 60 * 60;
        const minutesInMs = 1000 * 60;

        const daysUntilTheEvent = Math.floor(distanceToTheEvent / daysInMs);
        const hoursUntilTheEvent = Math.floor((distanceToTheEvent % daysInMs) / hoursInMs);
        const minutesUntilTheEvent = Math.floor((distanceToTheEvent % hoursInMs) / minutesInMs);
        const secondsUntilTheEvent = Math.floor((distanceToTheEvent % minutesInMs) / 1000);

        document.getElementById('daysCountDown').innerHTML = `${daysUntilTheEvent}d`;
        document.getElementById('hoursCountDown').innerHTML = `${hoursUntilTheEvent}h`;
        document.getElementById('minutesCountDown').innerHTML = `${minutesUntilTheEvent}m`;
        document.getElementById('secondsCountDown').innerHTML = `${secondsUntilTheEvent}s`;

        if (distanceToTheEvent < 0) {
            clearInterval(countTheHours);
            const countDownExpired = document.getElementById('countDown')
            countDownExpired.innerHTML = `Expired Event`;
            countDownExpired.style.display = 'flex';
            countDownExpired.style.justifyContent = 'center';
            countDownExpired.style.color = '#F5A442'
        }
    }, 1000);
};