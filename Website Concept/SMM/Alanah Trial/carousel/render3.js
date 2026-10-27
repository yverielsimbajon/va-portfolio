const { spawn } = require("child_process");
const fs = require("fs");
const CH = "C:/Program Files/Google/Chrome/Application/chrome.exe";
const dir = __dirname.replace(/\\/g, "/");
fs.mkdirSync(dir + "/out3", { recursive: true });
const names = ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8"];
let i = 0, running = 0;
function next() {
  while (running < 4 && i < names.length) {
    const n = names[i++]; running++;
    const p = spawn(CH, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--window-size=1080,1350",
      "--virtual-time-budget=6000", "--allow-file-access-from-files",
      `--screenshot=${dir}/out3/${n}.png`, `file:///${dir}/slides3.html?n=${n}`], { stdio: "ignore", windowsHide: true });
    p.on("exit", () => { running--; console.log("done", n); next(); });
  }
}
next();
