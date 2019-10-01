module.exports = (raw, theme, dark) => `
[options]
#allow_bold = true
#audible_bell = false
#bold_is_bright = true
#cell_height_scale = 1.0
#cell_width_scale = 1.0
#clickable_url = true
#dynamic_title = true
font = Hack 12
#fullscreen = true
#icon_name = terminal
#mouse_autohide = false
#scroll_on_output = false
#scroll_on_keystroke = true
# Length of the scrollback buffer, 0 disabled the scrollback buffer
# and setting it to a negative value means "infinite scrollback"
scrollback_lines = 10000
#search_wrap = true
#urgent_on_bell = true
#hyperlinks = false

# $BROWSER is used by default if set, with xdg-open as a fallback
#browser = xdg-open

# "system", "on" or "off"
#cursor_blink = system

# "block", "underline" or "ibeam"
#cursor_shape = block

# Hide links that are no longer valid in url select overlay mode
#filter_unmatched_urls = true

# Emit escape sequences for extra modified keys
#modify_other_keys = false

# set size hints for the window
#size_hints = false

# "off", "left" or "right"
#scrollbar = off

[colors]
# hard contrast: 
background = ${theme.bg}
# normal contrast: background = #fbf1c7
# soft contrast: background = #f2e5bc
foreground = ${theme.fg}
foreground_bold = ${theme.fg}

# light0 + gray
color0 = ${theme.bg}
color8 = ${raw.dark[6]}

# neutral_red + faded_red
color1 = ${theme.color1}
color9 = ${raw.color1[0]}

# neutral_green + faded_green
color2 = ${theme.color2}
color10 = ${raw.color2[0]}

# neutral_yellow + faded_yellow
color3 = ${theme.color3}
color11 = ${raw.color3[0]}

# neutral_blue + faded_blue
color4 = ${theme.color4}
color12 = ${raw.color4[0]}

# neutral_purple + faded_purple
color5 = ${theme.color5}
color13 = ${raw.color5[0]}

# neutral_aqua + faded_aqua
color6 = ${theme.color6}
color14 = ${raw.color6[0]}

# dark4 + dark1
color7 = ${raw.dark[3]}
color15 = ${raw.dark[0]}

# vim: ft=dosini cms=#%s

[hints]
#font = Monospace 12
#foreground = #dcdccc
#background = #3f3f3f
#active_foreground = #e68080
#active_background = #3f3f3f
#padding = 2
#border = #3f3f3f
#border_width = 0.5
#roundness = 2.0

# vim: ft=dosini cms=#%s
`
