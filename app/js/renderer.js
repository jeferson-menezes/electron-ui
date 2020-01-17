const { ipcRenderer } = require('electron');
const service = require(`${__dirname}/js/service.js`);

const linkSobre = document.querySelector('#link-sobre');
const spanAlerta = document.querySelector('#span-alerta');
const btnAlerta = document.querySelector('#btn-alerta');


linkSobre.addEventListener('click', function () {
    console.log('clicado');
    ipcRenderer.send('abrir-janela-sobre');
});

btnAlerta.addEventListener('click', function () {
    service.carregaJar().then(e => {
        spanAlerta.textContent = e;
    }).cath(err => console.error(err));
});

