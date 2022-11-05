#!/bin/fish
# please set FOLLOWEDTWITCHCHANNELS variable with set -U
# uses twitchnotifier

set interval 120

for channel in $FOLLOWEDTWITCHCHANNELS
    set $channel 0
end

while true
    sleep $interval
    for channel in $FOLLOWEDTWITCHCHANNELS
        set message (twitchnotifier --user $channel)
        if test $$channel -eq 0
            if string match -qe -- "online" $message
                set $channel 1
                notify-send Twitch $message -t 0
            end
        end
        if string match -qe -- "$message" "offline"
            set $channel 0
        end
    end
end
