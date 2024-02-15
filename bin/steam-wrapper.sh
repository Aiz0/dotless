#!/bin/fish
# Wrapper script for steam to remove dotfiles created by steam from home
set STEAMDIR $XDG_DATA_HOME/steam-home

# create new steamdir if it doesn't exist useful on first launch
if ! test -d "$STEAMDIR"
    mkdir -p $STEAMDIR
end

# set home and launch steam
set HOME $STEAMDIR
exec $XDG_DATA_HOME/Steam/steam.sh $argv
