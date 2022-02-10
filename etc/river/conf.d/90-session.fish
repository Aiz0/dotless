#!/bin/fish

set -gx XDG_CURRENT_DESKTOP river
set -gx XDG_SESSION_TYPE wayland

set variables DISPLAY WAYLAND_DISPLAY XDG_CURRENT_DESKTOP XDG_SESSION_TYPE
set session_target river-session.target

if systemctl --user -q is-active $session_target
    exit
end

# Update environment for dbus and systemd
dbus-update-activation-environment --systemd $variables

systemctl --user reset-failed
# Start services wanted by session target
systemctl --user start $session_target
