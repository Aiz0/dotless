#!/bin/fish
if set -q MUSIC_PLAYER
    set player --player $MUSIC_PLAYER
end
set playerStatus (playerctl status $player)

if contains $playerStatus "Playing" "Paused"
    set metadata (playerctl metadata --format "{{title}}\n {{artist}}" $player)
end

dunstify -a showMusic $playerStatus $metadata $player
