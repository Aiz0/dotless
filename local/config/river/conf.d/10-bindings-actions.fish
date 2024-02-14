#!/bin/fish

# Close the focused view
riverctl map normal Super W close

#TODO kill the focused view
#riverctl map normal Super+Shift W

# Reload configuration
riverctl map normal Super+Alt Escape spawn "$XDG_CONFIG_HOME/river/init; notify-send reloaded"

# Exit river
riverctl map normal Super+Shift Q exit
