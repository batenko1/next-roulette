export default function calculateTimeDifference (start, end) {
    // Перевести даты в миллисекунды
    const startTime = start.getTime();
    const endTime = end.getTime();

    // Вычислить разницу в миллисекундах
    const seconds = 86400 - Math.floor(Math.abs(endTime - startTime) / 1000);

    // Разделить секунды на 60, чтобы получить минуты
    const minutes = Math.floor(seconds / 60);

    const hours = Math.floor(minutes / 60);

    const remainingMinutes = minutes % 60;

    const remainingSeconds = seconds % 60;

    return {
        hours,
        minutes: remainingMinutes,
        seconds:remainingSeconds
    };
}
