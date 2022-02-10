#!/bin/fish

#
# Global
#

#keyboard repeat rate
riverctl set-repeat 40 275
riverctl xcursor-theme posy-black

# Attach new views at bottom of view stack
riverctl attach-mode bottom

# border
riverctl border-width 2
riverctl border-color-unfocused 0x333B47
riverctl border-color-focused 0x64B9F2

#
# App specific
#

# Set app-ids of views which should float
riverctl float-filter-add app-id float
riverctl float-filter-add app-id popup
