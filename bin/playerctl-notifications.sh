#!/bin/fish
set musicPlayer spotifyd
set playerStatus (playerctl status -p $musicPlayer)

if test (test "$playerStatus" = "Playing") -o (test "$playerStatus" = "Paused")
    dunstify -a showMusic $playerStatus (playerctl metadata title -p $musicPlayer)\n(playerctl metadata artist -p $musicPlayer) -r 5
   else
    dunstify -a showMusic $playerStatus
end
