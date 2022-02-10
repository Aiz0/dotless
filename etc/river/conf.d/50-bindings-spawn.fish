#!/bin/fish

# Terminal
set termlist $WAYLAND_TERMINAL $TERMINAL alacritty
riverctl map normal Super Return spawn $termlist[1]

# Browser
riverctl map normal Super P spawn ff
riverctl map normal Super+Shift P spawn "ff --private-window"
riverctl map normal Super+Alt P spawn "ff -P 'default'"

# Launcher
riverctl map normal Super Space spawn "fuzzel --font monospace:20 --lines 5 --width 50 --horizontal-pad 20 --background 282C33FF --text-color f2f2f4ff  --match-color 71c6ffff --selection-color 2e343fff --selection-text-color f2f2f4ff --border-width 0 --border-radius 0"


# Lock
riverctl map normal Super L spawn "swaylock --color 000000"

# Screenshot
riverctl map normal Super D spawn "wl-screenshot.sh --optimize"
riverctl map normal Super C spawn "wl-screenshot.sh --select --copy --optimize"
