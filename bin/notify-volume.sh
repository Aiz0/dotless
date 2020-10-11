#!/bin/fish
# Gets the current volume in % from amixer and creates a notification with dunstify

# Gets the Right volume
set volume (amixer sget Master | grep 'Right:' | awk -F '[][]' '{ print $2 }')

dunstify -a showVolume Volume $volume -r 6
