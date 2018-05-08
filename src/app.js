// CSS Files
import "./stylesheets/gridstack.min.css"; 
import "./stylesheets/main.css";

// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// ----------------------------------------------------------------------------
// Everything below is just to show you how it works. You can delete all of it.
// ----------------------------------------------------------------------------

import { remote } from "electron";
import jetpack from "fs-jetpack";
import { greet } from "./hello_world/hello_world";
import env from "env";

const app = remote.app;
const appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// files from disk like it's node.js! Welcome to Electron world :)
const manifest = appDir.read("package.json", "json");

const osMap = {
  win32: "Windows",
  darwin: "macOS",
  linux: "Linux"
};

// Gridstack
window.$ = window.jQuery = require('jquery');
window.$.ui = window.jQuery.ui = require('jquery-ui/ui/data.js');
import gridstack from 'gridstack';
//import 'gridstack/dist/gridstack.jQueryUI.js'; 
// Results in error: Cannot read property 'registerPlugin' of undefined


$(".grid-stack").gridstack({
  width: 12,
  float: true,
  resizable: { autoHide: false, handles: "se" },
  animate: true,
  placeholderClass: "grid-stack-placeholder"
});



document.querySelector("#app").style.display = "block";
document.querySelector("#greet").innerHTML = greet();
document.querySelector("#os").innerHTML = osMap[process.platform];
document.querySelector("#author").innerHTML = manifest.author;
document.querySelector("#env").innerHTML = env.name;
document.querySelector("#electron-version").innerHTML =
  process.versions.electron;
