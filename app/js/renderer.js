const { ipcRenderer } = require('electron');
const service = require(`${__dirname}/js/service.js`);
// const service = require('service.js');

const linkSobre = document.querySelector('#link-sobre');
const spanAlerta = document.querySelector('#span-alerta');
const btnAlerta = document.querySelector('#btn-alerta');


linkSobre.addEventListener('click', function () {
    ipcRenderer.send('abrir-janela-sobre');
});

btnAlerta.addEventListener('click', async function () {

    try {
        spanAlerta.textContent = '';
        const texto = await service.carregaJar()
        spanAlerta.innerHTML = template(texto);
    } catch (error) {
        console.error(error);
    }
});

function template(texto) {
    return `<div class="alert alert-primary" role="alert">${texto}</div>`;
}


