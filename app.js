const Day = document.getElementById('day');
const Hour = document.getElementById('hour');
const Minute = document.getElementById('minute');
const Second = document.getElementById('second');



let CountDown = () => {
    const Time = new Date();
    const EventTime = new Date("February 4, 2022 12:00:01")
    const leftTime = EventTime - Time;

    let LeftEventSeond = Math.floor(leftTime / 1000);
    let LeftEventMinute = Math.floor(LeftEventSeond / 60);
    let LeftEventHour = Math.floor(LeftEventMinute / 60);
    let LeftEventDay = Math.floor(LeftEventHour / 24);

    LeftEventSeond = LeftEventSeond % 60;
    LeftEventMinute = LeftEventMinute % 60;
    LeftEventHour = LeftEventHour % 24;

    Day.innerText = LeftEventDay < 10 ? '0' + LeftEventDay : LeftEventDay;
    Hour.innerText = LeftEventHour < 10 ? '0' + LeftEventHour : LeftEventHour;
    Minute.innerText = LeftEventMinute < 10 ? '0' + LeftEventMinute : LeftEventMinute;
    Second.innerText = LeftEventSeond < 10 ? '0' + LeftEventSeond : LeftEventSeond;
}

// CountDown()

setInterval(CountDown, 1000)