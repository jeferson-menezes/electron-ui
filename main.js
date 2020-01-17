const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {

    console.log('Aplicação iniciada...');

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400,
        webPreferences: { nodeIntegration: true }
    });

    mainWindow.loadURL(`file://${__dirname}/app/index.html`)
});


app.on('window-all-closed', () => {
    app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {

    if (sobreWindow !== null) {
        return;
    }

    sobreWindow = new BrowserWindow({
        width: 300,
        height: 200,
        alwaysOnTop: true,
        frame: false,
        webPreferences: { nodeIntegration: true }
    });

    sobreWindow.on('closed', () => sobreWindow = null);

    sobreWindow.loadURL(`file://${__dirname}/app/sobre.html`)
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close()
});