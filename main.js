const path = require("path");
const { app, BrowserWindow, Menu } = require("electron");

// const isDev = process.env.NODE_ENV !== "development";
const isMac = process.platform === "darwin";

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#00000000",
      symbolColor: "#5ffff5",
    },
    title: "Image Resizer",
    transparent:true,
    width: 800,
    height: 600,
  });

  mainWindow.loadFile(path.join(__dirname, "./renderer/index.html"));
  // mainWindow.loadURL("https://alexeg.github.io/YourManga/");
  // mainWindow.loadURL("https://www.kaspersky.com/");
  // Open devtools if in dev env
  // if (isDev) {
  //   mainWindow.webContents.openDevTools();
  // }

  // mainWindow.setMenuBarVisibility(false);
}

app.whenReady().then(() => {
  createMainWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
});

// app.on("window-all-closed", () => {
//   if (!isMac) {
//     app.quit;
//   }
// });
