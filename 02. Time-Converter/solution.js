function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let min = document.getElementById('minutes');
    let sec = document.getElementById('seconds');
    const btnDays = document.getElementById('daysBtn').addEventListener('click', convertDays);
    const btnHours = document.getElementById('hoursBtn').addEventListener('click', convertHours);
    const btnMin = document.getElementById('minutesBtn').addEventListener('click', convertMin);
    const btnSec = document.getElementById('secondsBtn').addEventListener('click', convertSec);

    function convertDays() {
        let inputDays = Number(days.value);
        hours.value = inputDays * 24;
        min.value = inputDays * 1440;
        sec.value = inputDays * 86400;
    }

    function convertHours() {
        let inputHours = Number(hours.value);
        days.value = inputHours / 24;
        min.value = inputHours * 60;
        sec.value = inputHours * 3600;
    }

    function convertMin() {
        let inputMin = Number(min.value);
        days.value = inputMin / 1440;
        hours.value = inputMin / 60;
        sec.value = inputMin * 60;
    }

    function convertSec() {
        let inputSec = Number(sec.value);
        days.value = inputSec / 86400;
        hours.value = inputSec / 3600;
        min.value = inputSec / 60;
    }
}