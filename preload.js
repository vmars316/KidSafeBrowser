const { ipcRenderer, contextBridge } = require('electron')

contextBridge.exposeInMainWorld('webview', {
    loadURL: (url) => ipcRenderer.send('webview-load-url', url),
    back: () => ipcRenderer.send('webview-back'),
    forward: () => ipcRenderer.send('webview-forward'),
    toggleDevtools: () => ipcRenderer.send('webview-toggle-devtools'),
})