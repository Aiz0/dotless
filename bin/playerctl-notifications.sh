#!/bin/fish

set playerStatus (playerctl status -p spotify)

if test (test "$playerStatus" = "Playing") -o (test "$playerStatus" = "Paused")
    dunstify -a showMusic $playerStatus (playerctl metadata title -p spotify)\n(playerctl metadata artist -p spotify) -r 5
   else
    dunstify -a showMusic $playerStatus
end
