module.exports = (raw, theme, dark) => {
  const bg = raw.color2[1]
  const activeBg = dark ? raw.color2[0] : raw.color2[2]
  return `
* {
    border: none;
    border-radius: 0;
    font-family: Hack, Helvetica, Arial, sans-serif;
    font-size: 13px;
    min-height: 0;
}

window#waybar {
    background: ${theme.fg};
    color: ${theme.fg};
}

#workspaces {
    margin-top: 10px;
    margin-right: 10px;
}

#workspaces button {
    padding: 10px 10px;
    background: ${bg};
    color: ${theme.fg};
}

#workspaces button.focused {
    background: ${activeBg};
    color: ${theme.bg};
}

#network, #pulseaudio, #clock, #battery {
    padding: 10px 10px;
    padding-left: 15px;
    margin-right: 10px;
}

#network {
    background: ${theme.color7}
}

#pulseaudio{
    background: ${theme.color6}
}

#battery{
    background: ${theme.color4};
}

#clock {
    background: ${theme.color5};
    margin-bottom: 10px;
}

#mode {
    padding:10px 0;
    background: ${theme.color5};
    margin-right: 10px;
}



#battery.charging {
    background-color: ${theme.color6};
    color: ${theme.bg};
}


#battery.warning:not(.charging) {
    color: ${theme.bg};
    background-color: ${theme.color1};
}
`}
