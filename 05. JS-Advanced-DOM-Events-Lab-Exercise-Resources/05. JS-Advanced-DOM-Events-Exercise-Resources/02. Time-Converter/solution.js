function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButon = document.getElementById('daysBtn');
    let hoursButon = document.getElementById('hoursBtn');
    let minutesButon = document.getElementById('minutesBtn');
    let secondsButon = document.getElementById('secondsBtn');

    daysButon.addEventListener('click', () => {
        let days = Number(daysInput.value);
        let hours =days * 24;
        let minutes = days * 24 * 60;
        let seconds = days * 24 * 60 * 60;
        hoursInput.value = hours;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    });

    hoursButon.addEventListener('click', () => {
        let hours = Number(hoursInput.value);
        let days = hours / 24;
        let minutes = hours * 60;
        let seconds = hours * 60 * 60;
        daysInput.value = days;
        minutesInput.value = minutes;
        secondsInput.value = seconds;
    });

    minutesButon.addEventListener('click', () => {
        let minutes = Number(minutesInput.value);
        let hours = minutes / 60;
        let days = hours / 24;
        let seconds = minutes * 60;
        daysInput.value = days;
        hoursInput.value = hours;
        secondsInput.value = seconds;
    });

    secondsButon.addEventListener('click', () => {
        let seconds = Number(secondsInput.value);
        let hours = seconds / 60 / 60;
        let days = seconds / 60 / 60 / 24;
        let minutes = seconds / 60;
        daysInput.value = days;
        minutesInput.value = minutes;
        hoursInput.value = hours;
    });

}