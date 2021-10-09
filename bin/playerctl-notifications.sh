#!/bin/fish
if set -q MUSIC_PLAYER
    set player --player $MUSIC_PLAYER
end
set playerStatus (playerctl status $player)

if contains $playerStatus "Playing" "Paused"
    set metadata (playerctl metadata --format "{{title}}\n {{artist}}" $player)
    set iconPath /tmp/dunst_spotify_icon
    curl -s -o $iconPath (playerctl metadata mpris:artUrl)
    set icon --icon $iconPath
else if test -z $playerStatus
    set playerStatus Stopped
end

dunstify -a showMusic $playerStatus $metadata $icon --replace 5
