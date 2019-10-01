const fs = require("fs");
const gruvbox = require("./themes/gruvbox.js");

const dark = true;
const theme = gruvbox.dark;

const files = ["../waybar/style.css", "../termite/config", "../sway/config"];

files.forEach(f => {
  const config = require(f + ".tmpl.js");
  const withTheme = config(gruvbox.raw, theme, dark);
  const data = new Uint8Array(Buffer.from(withTheme));

  fs.writeFile(f, data, err => {
    if (err) throw err;
    console.log("DONE: " + f);
  });
});
