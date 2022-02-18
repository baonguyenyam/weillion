// Utilities
const path = require("path");
const fs = require("fs");

// Electron
const { app, Menu, BrowserWindow } = require("electron");
require("@electron/remote/main").initialize();

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;


app.on("ready", () => {
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  // Option 1: Uses Webtag and load a custom html file with external content
  // mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.loadFile('dist/index.html');
  mainWindow.center();

  const splash = new BrowserWindow({
    width: 600,
    height: 400,
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    frame: false,
    alwaysOnTop: true,
    icon: path.join(__dirname, "./assets/favicon/apple-icon.png"),
    webPreferences: {
      devTools: false, // false if you want to remove dev tools access for the user
      contextIsolation: true,
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      webSecurity: false,
      allowRunningInsecureContent: true,
      enableRemoteModule: true, // required for print function [removed since Electron 12, uses https://github.com/electron/remote]
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
    },
  });

  splash.loadFile('splash.html');
  splash.removeMenu()
  splash.center();
  // splash.openDevTools();


  mainWindow.webContents.on('did-finish-load', () => {
    setTimeout(function () {
      splash.close();
      // const menu = require("./src/menu");
      // const template = menu.createTemplate(app.name);
      // const builtMenu = Menu.buildFromTemplate(template);
      // Menu.setApplicationMenu(builtMenu);
      mainWindow.show();
    }, 5000);
    console.log('finished to load ');
  })

  // Option 2: Load directly an URL if you don't need interface customization
  //mainWindow.loadURL("https://github.com");

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  // mainWindow.openDevTools();

});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
