/** Информация о состоянии протеза. */
let prosthesisStatus = {
    id: 0,
    results: '100 50 40',
    type: 'Prosthesis',
    date: 'Fri Jul 03 2020 12:00:00 GMT+0300'
};

/**
 * Функция получения информации о состоянии протеза.
 * @return {string} строка с информацией о состоянии протеза.
 */
function getProsthesisStatus() {
    // Получение состояния протеза в формате JSON
    return JSON.stringify(prosthesisStatus);
}

/**
 * Функция обновления состояния протеза.
 * @param {Object} status состояние протеза.
 */
function setProsthesisStatus(status) {
    prosthesisStatus = status;
    console.log('SET STATUS: ' + getProsthesisStatus());
}

/**
 * Функция получения рандомного состояния протеза.
 * @return {Object} рандомное состояние протеза.
 */
function getRandomStatus() {
    // Рандомное число (от 0 до 100) для установки случайного статуса
    const randomNumber = Math.round(100 * Math.random());
    return {
        id: randomNumber,
        results: (0.9 * randomNumber) + ' ' + (0.5 * randomNumber) + ' ' + (1.5 * randomNumber),
        type: 'Prosthesis',
        date: '' + (new Date())
    };
}

/**
 * Функция, симулирующая установку новых данных о статусе протеза.
 */
function tickSimulation() {
    const status = getRandomStatus();
    setProsthesisStatus(status);
}

/**
 * Функция запуска симуляции.
 */
function startSimulation() {
    /** Период для симуляции получения нового статуса протеза (в миллисекундах). */
    const PERIOD_GET_DATA = 2000;
    // Запуск симуляции, с регулярным обновлением статуса (раз в PERIOD_GET_DATA)
    setInterval(tickSimulation, PERIOD_GET_DATA);
}

startSimulation();
