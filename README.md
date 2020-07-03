## Тестовое задание на JS-разработчика в Info Lab

### Проект:

Приложение для настройки бионических протезов. 
Которое также получает информацию о состоянии протеза (условную силу хвата или заряд аккамулятора).

---
### Задача:

Необходимо отправлять информацию о состоянии протеза в облако (*ссылка на тестовый сервер в проекте*).

Частота загрузки регулируется. На данный момент можно взять 5 - 10 секунд.

При этом, если доступ в Интернет отсутсвует, необходимо сохранить информацию в кэш. И организовать "очередь" на загрузку.

Когда доступ к Интернету появляется, необходимо выгрузить в облако всю сохранённую локально информацию.

---
### Комментарии:

Часть функционала уже реализована: прописаны все необходимые функции для выполнения задачи.

Поэтому основная работа будет происходить в функциях:

* `checkNeedToUpload()`
* `sendDataToServer(json)`
* `saveToStorage()`
* `loadFromStorage()`

---
