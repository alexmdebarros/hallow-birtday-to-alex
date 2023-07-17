

const dateBirtday = new Date("Oct 26, 2023 20:00:00");
const timeEvent = dateBirtday.getTime();

const hours = setInterval(function(){
    const now = new Date();
    const timeNow = now.getTime();

    const eventDistance = timeEvent - timeNow;

    const days = 1000 *  60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const mins = 1000 * 60;

    const daysEvent = Math.floor(eventDistance / days);
    const hoursEvent = Math.floor((eventDistance % days) / hours);
    const minsEvent = Math.floor((eventDistance % hours) / mins);
    seconds = Math.floor((eventDistance % mins) / 1000);

    document.getElementById('countdown__clock').innerHTML = `${daysEvent}d ${hoursEvent}h ${minsEvent}m ${seconds}s`;

    if (eventDistance < 0) {
        clearInterval(hours);
        document.getElementById('countdown__clock').innerHTML = 'Evento encerrado';
    }
}, 1000);


