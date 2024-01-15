[![Build status](https://ci.appveyor.com/api/projects/status/5v8sldb4kemmkbix/branch/main?svg=true)](https://ci.appveyor.com/project/natalia-smyslova/usejsonfetch/branch/main)

[![Netology AHJ](https://github.com/natalia-smyslova/useJsonFetch/actions/workflows/web.yml/badge.svg)](https://github.com/natalia-smyslova/useJsonFetch/actions/workflows/web.yml)

[ДЕМО](https://natalia-smyslova.github.io/useJsonFetch/)

[BACKEND](https://github.com/natalia-smyslova/useJsonFetch__backend)

useJsonFetch
===

Реализуйте кастомный хук `useJsonFetch`, который позволяет с помощью `fetch` осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

где:
* `data` — данные, полученные после `response.json()`, не Promise, а именно данные;
* `error` — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;
* `loading` — boolean флаг, сигнализирующий о том, что загрузка идёт.

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса:
* GET http://localhost:7070/data — успешное получение данных;
* GET http://localhost:7070/error — получение 500 ошибки;
* GET http://localhost:7070/loading — индикатор загрузки.

Backend возьмите из каталога `backend`.
