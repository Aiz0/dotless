#!/bin/fish
# Gets the current volume in % from amixer and creates a notification with dunstify

# Gets the Right volume
set volume (amixer sget Master | grep 'Right:' | awk -F '[][]' '{ print $2 }')

notify-send Volume $volume -r 6
