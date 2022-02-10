#!/bin/fish

# Focus the next/previous view in the layout stack
riverctl map normal Super N focus-view next
riverctl map normal Super E focus-view previous

# Swap the focused view with the next/previous
# view in the layout stack
riverctl map normal Super+Shift N swap next
riverctl map normal Super+Shift E swap previous

# Super+Alt+{M,N,E,I} to move views
riverctl map normal Super+Alt M move left 100
riverctl map normal Super+Alt N move down 100
riverctl map normal Super+Alt E move up 100
riverctl map normal Super+Alt I move right 100

# Super+Alt+Control+{M,N,E,I} to snap views to screen edges
riverctl map normal Super+Alt+Control M snap left
riverctl map normal Super+Alt+Control N snap down
riverctl map normal Super+Alt+Control E snap up
riverctl map normal Super+Alt+Control I snap right

# Super+Alt+Shif+{M,N,E,I} to resize views
riverctl map normal Super+Alt+Shift M resize horizontal -100
riverctl map normal Super+Alt+Shift N resize vertical 100
riverctl map normal Super+Alt+Shift E resize vertical -100
riverctl map normal Super+Alt+Shift I resize horizontal 100

#
# Toggle view state
#

# Super+Space to toggle float
riverctl map normal Super+Shift F toggle-float

# Super+F to toggle fullscreen
riverctl map normal Super F toggle-fullscreen

#
# Mouse bindings
#

# Super + Left Mouse Button to move views
riverctl map-pointer normal Super BTN_LEFT move-view

# Super + Right Mouse Button to resize views
riverctl map-pointer normal Super BTN_RIGHT resize-view
