#!/bin/fish

# Terminal
set termlist $WAYLAND_TERMINAL $TERMINAL alacritty
riverctl map normal Super Return spawn $termlist[1]

# Browser
riverctl map normal Super P spawn ff
riverctl map normal Super+Shift P spawn "ff --private-window"
riverctl map normal Super+Alt P spawn "ff -P 'default'"

# Launcher
riverctl map normal Super Space spawn "fuzzel.sh"


# Lock
riverctl map normal Super L spawn "swaylock -f"

# Screenshot
riverctl map normal Super D spawn "wl-screenshot.sh --optimize"
riverctl map normal Super C spawn "wl-screenshot.sh --select --copy --optimize"
