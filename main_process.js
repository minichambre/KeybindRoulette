// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const os = require('os')
const ipc = require('electron').ipcMain
// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    mainWindow = new BrowserWindow({width: 1280,height: 720,frame:false,transparent:true})
    // BrowserWindow.addDevToolsExtension(
    //   path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.6.0_0' )
    // )
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
      // Dereference the window object, usually you would store windows
      // in an array if your app supports multi windows, this is the time
      // when you should delete the corresponding element.
      mainWindow = null;
    });

})



// Quit when all windows are closed.
app.on('window-all-closed', () => {
// On OS X it is common for applications and their menu bar
// to stay active until the user quits explicitly with Cmd + Q
if (process.platform !== 'darwin') {
  app.quit();
}
});

app.on('activate', () => {
// On OS X it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
if (mainWindow === null) {
  createWindow();
}
});

ipc.on('close-main-window', function(){
  app.quit();
})


ipc.on('minimise-main-window', function(){
  mainWindow.minimize();
})
