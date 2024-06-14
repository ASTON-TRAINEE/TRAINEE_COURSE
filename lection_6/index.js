const wrapperEl = document.querySelector('#wrapper');

const formEl = document.querySelector('#form');
const divEl = document.querySelector('#div');
const pEl = document.getElementById('p');


formEl.addEventListener('click', (event) => {
    console.log('form')
}, {
    capture: true,
    once: true
})
divEl.addEventListener('click', (event) => {
    console.log('div')
})

pEl.addEventListener('click', (event) => {
    console.log('p')
})


//////

wrapperEl.addEventListener('click',   function (event){
    const actionDataEl = event.target.dataset.action;


    console.log('this', this)
    console.log('target', event.target)
    console.log('currentTarget', event.currentTarget)

    if (actionDataEl === 'delete') {
        console.log('какая-то логика с удалением')
    }
})

// defer
// Скрипты с defer никогда не блокируют страницу.
// Скрипты с defer всегда выполняются, когда дерево DOM готово, но до события DOMContentLoaded.

//1. Содержимое страницы отобразится мгновенно.
//2. Событие DOMContentLoaded подождёт отложенный скрипт. Оно будет сгенерировано, только когда скрипт (2) будет загружен и выполнен.

// async
// Атрибут async означает, что скрипт абсолютно независим:
//
// Страница не ждёт асинхронных скриптов, содержимое обрабатывается и отображается.
// Событие DOMContentLoaded и асинхронные скрипты не ждут друг друга:
// DOMContentLoaded может произойти как до асинхронного скрипта (если асинхронный скрипт завершит загрузку после того, как страница будет готова),
// …так и после асинхронного скрипта (если он короткий или уже содержится в HTTP-кеше)
// Остальные скрипты не ждут async, и скрипты c async не ждут другие скрипты.

// Асинхронные скрипты очень полезны для добавления на страницу сторонних скриптов: счётчиков, рекламы и т.д.
// Они не зависят от наших скриптов, и мы тоже не должны ждать их:

// На практике defer используется для скриптов, которым требуется доступ ко всему DOM и/или важен их относительный порядок выполнения.
//
// А async хорош для независимых скриптов, например счётчиков и рекламы, относительный порядок выполнения которых не играет роли.



