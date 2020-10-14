#!/bin/fish

set rofitheme $XDG_CONFIG_HOME/rofi/themes/menu/powermenu.rasi

set shutdown 󰐥
set reboot 󰜉
set lock 󰌾
set suspend 󰒲
set logout 󰍃

set options $shutdown $reboot $lock $suspend $logout
set choice (echo -se $options\n | rofi -theme $rofitheme -dmenu -selected-row 2)
switch $choice
    case $shutdown
        poweroff
    case $reboot
        reboot
    case $lock
        xsecurelock
    case $suspend
        xsecurelock &
        systemctl suspend
    case $logout
        bspc quit
end
