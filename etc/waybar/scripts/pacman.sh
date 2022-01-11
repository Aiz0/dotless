#!/bin/sh

if ! updates_arch=$(checkupdates 2> /dev/null | wc -l ); then
    updates_arch=0
fi

if ! updates_aur=$(yay -Qum 2> /dev/null | wc -l); then
    updates_aur=0
fi

num_updates=$(("$updates_arch" + "$updates_aur"))

if [ "$num_updates" -gt 0 ]; then
    echo "{\"text\": \"󰓦$num_updates \", \"class\": \"warning\"}"
else
    echo "{\"text\": \"\"}" 
fi
