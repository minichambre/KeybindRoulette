// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
const path = require('path')
const os = require('os')
// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname)

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {

    mainWindow = new BrowserWindow({width: 1280,height: 720,frame:false,transparent:true})
    BrowserWindow.addDevToolsExtension(
      path.join(os.homedir(), 'AppData\\Local\\Google\\Chrome\\User Data\\Default\\Extensions\\fmkadmapgofadopljbjfkapdkoienihi\\3.6.0_0' )
    )
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

})
