#!/bin/fish

# Close the focused view
riverctl map normal Super W close

#TODO kill the focused view
#riverctl map normal Super+Shift W

# Reload configuration
riverctl map normal Super+Alt Escape spawn "$XDG_CONFIG_HOME/river/init; notify-send reloaded"

# Exit river
riverctl map normal Super+Shift Q exit

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

# Super+Period and L+U to focus the next/previous output
riverctl map normal Super L focus-output next
riverctl map normal Super U focus-output previous

# Super+Shift+{L,U} to send the focused view to the next/previous output
riverctl map normal Super+Shift L send-to-output -current-tags next
riverctl map normal Super+Shift U send-to-output -current-tags previous

for i in (seq 9)
   set tags (math "2^($i - 1)")
    # Mod+[1-9] to focus tag [0-8]
    riverctl map normal Super $i set-focused-tags $tags

    # Mod+Shift+[1-9] to tag focused view with tag [0-8]
    riverctl map normal Super+Shift $i set-view-tags $tags

    # Mod+Ctrl+[1-9] to toggle focus of tag [0-8]
    riverctl map normal Super+Control $i toggle-focused-tags $tags

    # Mod+Shift+Ctrl+[1-9] to toggle tag [0-8] of focused view
    riverctl map normal Super+Shift+Control $i toggle-view-tags $tagsend
end

# Mod+0 to focus all tags
# Mod+Shift+0 to tag focused view with all tags
set all_tags (math "(2^32) - 1")
riverctl map normal Super 0 set-focused-tags $all_tags
riverctl map normal Super+Shift 0 set-view-tags $all_tags

# Various media key mapping examples for both normal and locked mode which do
# not have a modifier
for mode in normal locked
    # Control pulse audio volume with pamixer (https://github.com/cdemoulins/pamixer)
    riverctl map $mode None XF86AudioRaiseVolume  spawn "swayosd-client --output-volume raise"
    riverctl map $mode None XF86AudioLowerVolume  spawn "swayosd-client --output-volume lower"
    riverctl map $mode None XF86AudioMute         spawn "swayosd-client --output-volume mute-toggle"

    # Control MPRIS aware media players with playerctl (https://github.com/altdesktop/playerctl)
    riverctl map $mode None XF86AudioMedia spawn "playerctl play-pause; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioPlay  spawn "playerctl play-pause; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioPrev  spawn "playerctl previous; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioNext  spawn "playerctl next; sleep 0.15; playerctl-notifications.sh &"
end

# Terminal
set termlist $WAYLAND_TERMINAL $TERMINAL alacritty
riverctl map normal Super Return spawn $termlist[1]

# Browser
riverctl map normal Super P spawn ff
riverctl map normal Super+Shift P spawn "ff --private-window"
riverctl map normal Super+Alt P spawn "ff -P 'default'"

# Editor
riverctl map normal Super Z spawn zeditor

# Launcher
riverctl map normal Super Space spawn "fuzzel.sh"


# Lock
riverctl map normal Super Escape spawn "loginctl lock-session"
# Powermenu
riverctl map normal Super+Shift Escape spawn "wlogout"

# Screenshot
riverctl map normal Super D spawn "wl-screenshot.sh --optimize"
riverctl map normal Super C spawn "wl-screenshot.sh --select=area --copy --optimize"
riverctl map normal Super+Shift C spawn "wl-screenshot.sh --select=output --optimize"
