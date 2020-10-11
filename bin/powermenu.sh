#!/bin/fish

set rofitheme $XDG_CONFIG_HOME/rofi/themes/menu/powermenu.rasi

set shutdown 󰐥
set reboot 󰜉
set lock 󰌾
set suspend 󰒲
set logout 󰍃


set options "$shutdown\n$reboot\n$lock\n$suspend\n$logout"

set chosen (echo -e $options | rofi -theme $rofitheme -dmenu -selected-row 2)

switch $chosen
	case $shutdown
		echo shutdown
	case $reboot
		echo reboot
	case $lock
		echo lock
	case $suspend
		echo suspend
	case $logout
		echo logout
end
