// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// To fix the window types in the renderer, remember to add the signatures of this file in the src/types.d.ts file

// https://www.electronjs.org/docs/latest/tutorial/esm#preload-scripts
// IMPORTANT: If you change this file, remember to update the src/ui/types.d.ts file.

import { contextBridge } from "electron";
import { ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('api', {
    sendMessage: (message: string) => {
        console.log(message);
        ipcRenderer.invoke('ch')
        return message;
    }
});