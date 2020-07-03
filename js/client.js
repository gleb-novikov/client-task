/** Период между отправкой данных на сервер. */
const PERIOD_DATA_SENDING = 10 * 1000;
/** Период между проверками необходимости отправки данных на сервер. */
const PERIOD_CHECK_STATUS = 2 * 1000;
/** URL сервера на который отправляются данные. */
const SERVER_URL = 'https://serverforisk.herokuapp.com/';
/** Путь для POST запроса на сервер для добавления данных. */
const SERVER_METHOD = 'tests/get/last';

/**
 * Функция отправки данных о статусе протеза на сервер.
 * @param {string} json JSON с данными о статусе протеза.
 */
function sendDataToServer(json) {
    // ToDo: реализовать функцию отправки данных (json) на сервер
}

/**
 * Функция проверки необходимости загрузки данных на сервер.
 */
function checkNeedToUpload() {
    // ToDo: реализовать функцию, которая проверяет необходимость загрузки данных на сервер (и начинает их выгружать)
}

/**
 * Функция запуска клиента.
 */
function startClient() {
    // Подгрузка данных о состоянии протеза из кэша
    loadFromStorage();
    // Проверка необходимости выгрузки данных на сервер
    checkNeedToUpload();
    // Установка таймера, который раз в PERIOD_CHECK_STATUS вызывает функцию проверки необходимости отправки данных
    setInterval(checkNeedToUpload, PERIOD_CHECK_STATUS);
    setInterval(showStatusData, 1000);
}

/**
 * Функция отображения текущего статуса протеза.
 */
function showStatusData() {
    document.getElementById("text_data").textContent = getProsthesisStatus();
}

startClient();
