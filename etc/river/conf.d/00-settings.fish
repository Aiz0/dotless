#!/bin/fish

#
# Global
#

# Keyboard repeat rate
riverctl set-repeat 40 275
riverctl xcursor-theme posy-black

# Hide cursor after 5s
riverctl hide-cursor timeout 5000

# Attach new views at bottom of view stack
riverctl attach-mode bottom

# Default Background
riverctl background-color 0x29B6F6

# Border
riverctl border-width 2
riverctl border-color-unfocused 0x333B47
riverctl border-color-focused 0x64B9F2

# enable borders for all apps
riverctl rule-add ssd -app-id '*'

#
# App specific
#

# Set app-ids of views which should float
riverctl rule-add float -app-id 'float*'
riverctl rule-add float -app-id 'popup*'
