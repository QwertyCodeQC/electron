import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";
import { IpcChannels } from "./models/ipc.models.js";

app.on("ready", () => {
    const mainWindow = new BrowserWindow({
        webPreferences: {
            preload: path.join(app.getAppPath(), "dist-electron", "preload.mjs"),
            sandbox: false
        }
    });
    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react", "index.html"));
    mainWindow.webContents.openDevTools(); // Remove for production
});

ipcMain.handle(IpcChannels.CHANNEL1, async () => "message received by the main process");
