// This script is to delete automatically the dist folders

import { existsSync, readdirSync, lstatSync, unlinkSync, rmdirSync } from "fs";
import { join } from "path";

const deleteFolderRecursive = function (directoryPath) {
    if (existsSync(directoryPath)) {
        readdirSync(directoryPath).forEach((file) => {
            const curPath = join(directoryPath, file);
            if (lstatSync(curPath).isDirectory()) {
                // recurse
                deleteFolderRecursive(curPath);
            } else {
                // delete file
                unlinkSync(curPath);
            }
        });
        rmdirSync(directoryPath);
    }
};

["dist", "dist-electron", "dist-react"].forEach((dir) => {
    deleteFolderRecursive(join('.', dir));
});
