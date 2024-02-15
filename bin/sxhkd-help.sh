#!/bin/fish
# Original script found at
# https://my-take-on.tech/2020/07/03/some-tricks-for-sxhkd-and-bspwm/#show-a-help-menu-using-rofi

# make sure it's a unused char
set seperator '^'
awk '/^[a-z]/ && last {print "<small>",$0,"\n",last,"</small>"} {last=""} /^#/{last=$0}' ORS="$seperator" $XDG_CONFIG_HOME/sxhkd/sxhkdrc |
    rofi -dmenu -i -markup-rows -no-show-icons -width 1000 -lines 15 -yoffset 40 -sep $seperator
