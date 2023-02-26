let nowDate = new Date();
let happyDate = new Date(2024, 0, 1, 00, 00, 00, 000);

const tomorrowDate = nowDate.toLocaleString('ru', {weekday: 'long'});
const tomorrowTime = nowDate.toLocaleTimeString('en')


let dayTime = '';

if (nowDate.getHours() < 12 && nowDate.getHours() >= 6) {
    dayTime = 'Доброе утро'
}
if (nowDate.getHours() < 18 && nowDate.getHours() >= 12) {
    dayTime = 'Добрый день'
}
if (nowDate.getHours() < 22 && nowDate.getHours() >= 18) {
    dayTime = 'Добрый вечер'
}
if (nowDate.getHours() < 6 && nowDate.getHours() >= 22)  {
    dayTime = 'Доброй ночи'
}

let timeRemaining = (happyDate - nowDate) / 1000;
let daysHappy = Math.floor(timeRemaining / 60 / 60 / 24)

console.log(`
${dayTime}
Сегодня: ${tomorrowDate}
Текущее время: ${tomorrowTime}
До нового года осталось ${daysHappy} дней
`);

