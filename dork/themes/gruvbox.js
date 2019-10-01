const raw = {
  dark: ['#1d2021', '#282828', '#32302f', '#3c3836', '#504945', '#665c54', '#7c6f64', '#7c6f64'],
  light: ['#f9f5d7', '#fbf1c7', '#f2e5bc', '#ebdbb2', '#d5c4a1', '#bdae93', '#a89984', '#a89984'],
  color1: ['#fb4934', '#cc241d', '#9d0006'], // red
  color2: ['#b8bb26', '#98971a', '#79740e'], // green
  color3: ['#fabd2f', '#d79921', '#b57614'], // yellow
  color4: ['#83a598', '#458588', '#076678'], // blue
  color5: ['#d3869b', '#b16286', '#8f3f71'], // purple
  color6: ['#8ec07c', '#689d6a', '#427b58'], // aqua
  color7: ['#fe8019', '#d65d0e', '#af3a03'] // orange
}

const dark = {
  bg: raw.dark[1],
  fg: raw.light[3],
  color1: raw.color1[1],
  color2: raw.color2[1],
  color3: raw.color3[1],
  color4: raw.color4[1],
  color5: raw.color5[1],
  color6: raw.color6[1],
  color7: raw.color7[1]
}

const light = {
  bg: raw.light[0],
  fg: raw.dark[1],
  color1: raw.color1[2],
  color2: raw.color2[2],
  color3: raw.color3[2],
  color4: raw.color4[2],
  color5: raw.color5[2],
  color6: raw.color6[2],
  color7: raw.color7[2]
}

module.exports = {raw, dark, light};




