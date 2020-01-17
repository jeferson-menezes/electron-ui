const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector('#link-fechar');
let linkArgon = document.querySelector('#link-argon');
let versaoElectron = document.querySelector('#versao-electron');


window.onload = function () {
    const versao =  process.version.electron;
    console.log(versao);
    versaoElectron.textContent = versao;
};

linkFechar.addEventListener('click', () => {
    ipcRenderer.send('fechar-janela-sobre');
});

linkArgon.addEventListener('click', () => {
    shell.openExternal('https://www.argoninformatica.com.br/');
});
