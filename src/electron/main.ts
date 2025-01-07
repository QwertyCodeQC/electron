import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(app.getAppPath(), "dist-electron", "preload.mjs"),
            sandbox: false
        }
    });
    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react", "index.html"));
});

ipcMain.handle('ch', async () => {
    console.log('hello from main');
    return 'hello from main';
});
