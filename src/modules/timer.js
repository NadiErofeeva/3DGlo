const timer = (deadline) => {
    const timerDays = document.getElementById('timer-days');
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 / 60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {timeRemaining, days, hours, minutes, seconds}
    }

    const addClockEl = (time) => {
        if (time < 10) {
            return '0' + time
        } else {
            return time
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaining();

        timerHours.textContent = addClockEl(getTime.hours);
        timerMinutes.textContent = addClockEl(getTime.minutes);
        timerSeconds.textContent = addClockEl(getTime.seconds);
        timerDays.textContent = addClockEl(getTime.days);

        console.log('hi')

    }

    let interval = setInterval(()=>
    {
        let getTime = getTimeRemaining();
        getTime.timeRemaining > 0 ? updateClock() : clearInterval(interval);

    },1000)
}

export default timer