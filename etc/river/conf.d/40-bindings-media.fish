#!/bin/fish

# Various media key mapping examples for both normal and locked mode which do
# not have a modifier
for mode in normal locked
    # Control pulse audio volume with pamixer (https://github.com/cdemoulins/pamixer)
    riverctl map $mode None XF86AudioRaiseVolume  spawn "pamixer -i 5; notify-volume.sh"
    riverctl map $mode None XF86AudioLowerVolume  spawn "pamixer -d 5; notify-volume.sh"
    riverctl map $mode None XF86AudioMute         spawn "pamixer --toggle-mute"

    # Control MPRIS aware media players with playerctl (https://github.com/altdesktop/playerctl)
    riverctl map $mode None XF86AudioMedia spawn "playerctl play-pause; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioPlay  spawn "playerctl play-pause; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioPrev  spawn "playerctl previous; sleep 0.15; playerctl-notifications.sh &"
    riverctl map $mode None XF86AudioNext  spawn "playerctl next; sleep 0.15; playerctl-notifications.sh &"
end
