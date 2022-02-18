const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = (app) => {
  // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  return new BrowserWindow({
    width: 1550,
    height: 950,
    // width: 1450,
    // height: 950,
    show: false, // Hiện Flash Screen
    icon: path.join(__dirname, "../assets/favicon/apple-icon.png"),
    //titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    // frame: false,
    // transparent: true,
    // backgroundColor: '#56cc5b10',
    backgroundColor: "#fff",
    // alwaysOnTop: true,
    webPreferences: {
      devTools: false, // false if you want to remove dev tools access for the user
      contextIsolation: true,
      enableRemoteModule: true, // required for print function [removed since Electron 12, uses https://github.com/electron/remote]
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
      preload: path.join(__dirname, "../preload.js"), // required for print function
    },
  });
};
