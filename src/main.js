const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const {Chore, ChoreTemplate} = require('./chore');
const {History} = require('./history');
      
const path = require('path');

const createWindow = () => {
    const win = new BrowserWindow({
	width: 800,
	height: 600,
	webPreferences: {
	    nodeIntegration: true, // is default value after Electron v5
	    contextIsolation: true, // protect against prototype pollution
	    enableRemoteModule: false, // turn off remote
	    preload: path.join(__dirname, 'preload.js'),
	}
    })
    
    win.loadFile('index.html')
    win.webContents.openDevTools();

    ipcMain.handle('dark-mode:toggle', () => {
	if (nativeTheme.shouldUseDarkColors) {
	    nativeTheme.themeSource = 'light'
	} else {
	    nativeTheme.themeSource = 'dark'
	}
	return nativeTheme.shouldUseDarkColors
    })
    
    ipcMain.handle('dark-mode:system', () => {
	nativeTheme.themeSource = 'system'
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0)
	    createWindow();
    })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on ("before-quit", (event) => {
    console.log("Exit: save history before closing app...");
    let hi = new History();
    hi.update();

    process.exit (); // really let the app exit now
});
