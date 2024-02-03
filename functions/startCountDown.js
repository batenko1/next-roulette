export default function startCountdown(prepareHours, prepareMinutes, prepareSeconds) {
    // Преобразуем каждый элемент массива в число
    const hours = parseInt(prepareHours, 10);
    const minutes = parseInt(prepareMinutes, 10);
    const seconds = parseInt(prepareSeconds, 10);

    // Вычисляем общее количество секунд до указанного времени
    const targetSeconds = hours * 3600 + minutes * 60 + seconds;

    // Устанавливаем интервал обновления таймера каждую секунду
    const intervalId = setInterval(function () {
        const now = new Date();
        const currentSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
        const remainingSeconds = targetSeconds - currentSeconds;

        // Проверяем, если таймер истек, очищаем интервал
        if (remainingSeconds <= 0) {
            clearInterval(intervalId);
            document.getElementById('timer').innerHTML = 'Таймер истек!';
        } else {
            // Форматируем оставшееся время в виде часов, минут и секунд
            const remainingHours = Math.floor(remainingSeconds / 3600);
            const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
            const remainingSecondsFormatted = remainingSeconds % 60;

            document.getElementById('timerBonus').innerHTML = `${formatTime(remainingHours)}:${formatTime(remainingMinutes)}:${formatTime(remainingSecondsFormatted)}`
        }
    }, 1000); // Интервал в миллисекундах
}

function formatTime(num) {
    return num < 10 ? `0${num}` : num;
}