const path = require('path')
const { app, BrowserWindow, BrowserView, ipcMain } = require('electron')

async function main() {
    await app.whenReady()

    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile(path.join(__dirname, 'index.html'))
    const view = new BrowserView()
    view.setBounds({
        y: 21,
        x: 0,
        width: win.getBounds().width,
        height: win.getBounds().height - 21
    })
    view.setAutoResize({
        width: true, height: true
    })
    win.setBrowserView(view)
    ipcMain.on('webview-load-url', (_, url) => {
        console.log('Loading URL', url)
        view.webContents.loadURL(url)
    })
    ipcMain.on('webview-back', () => {
        console.log('Going back in history...')
        view.webContents.goBack()
    })
    ipcMain.on('webview-forward', () => {
        console.log('Going forward in history...')
        view.webContents.goForward()
    })
    ipcMain.on('webview-toggle-devtools', () => {
        console.log('Toggling devtools')
        view.webContents.toggleDevTools()
    })
}

main()