const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const app = electron.app

let template = [{
    label: '編集',
    submenu: [
        { label: 'コピー', position: 'endof=edit' },
        { label: '並べる', position: 'endof=window' },
        { label: 'アプリについて', position: 'endof=help' },
        { label: '更新', position: 'endof=help' },
        { label: '貼り付け', position: 'endof=edit' },
        { label: '選択', position: 'endof=edit' }
    ]
}]

if (process.platform === 'darwin') {
    const name = electron.app.getName()
    template.unshift({
        label: name
    })
}

app.on('ready', function() {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)

    const winPath = path.join('file://', __dirname, 'index.html')
    let win = new BrowserWindow({ width: 400, height: 320 })
    win.on('close', function() { win = null })
    win.loadURL(winPath)
    win.show()
})

app.on('ready', function() {
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
})