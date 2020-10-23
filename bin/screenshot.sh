#!/usr/bin/fish
# Sceenshoting with maim
# Compression is done with oxipng

argparse 'u/hidecursor' 's/select' 'w/selectwindow' 'c/compress' -- $argv


set screendir ~/usr/images/scr/linux
set datedir (date "+%Y/%m - %B")
set imagename (date "+%F_T%T")
set extension ".png"
set fullpath $screendir/$datedir/$imagename$extension

set scr_options
if test $_flag_u
    set scr_options '-u'
end

if test $_flag_s
    set scr_options $scr_options -s
else if test $_flag_w
    set scr_options $scr_options -s -t 9999999
end

if ! pgrep maim > /dev/null
    mkdir -p $screendir/$datedir
    maim -q $scr_options $fullpath
    if test $_flag_c
        oxipng -o 3 $fullpath > /dev/null &
    end
    dunstify -a screenshot "Cheese!" "screenshot saved"
    wait
end
