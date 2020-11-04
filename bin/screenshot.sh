#!/usr/bin/fish
# sceenshots are done with maim
# compression / optimizing is done with oxipng
# notifications are done with dunstify

argparse 'u/hidecursor' 's/select' 'w/selectwindow' 'c/compress' -- $argv

# should cursor be hidden
if test $_flag_u
    set scr_options -u
end

# should an area or window be selected
if test $_flag_s
    set scr_options $scr_options -s
else if test $_flag_w
    set scr_options $scr_options -s -t 9999999
end

# where should image be saved
set scr_dir ~/usr/images/scr/linux
set date_dir (date "+%Y/%m - %B")

# what should the image be called
set image_name (date "+%F_T%T")
set extension "png"

set fullpath $scr_dir/$date_dir/$image_name.$extension

# make sure maim isn't already running
# this is so that you don't have to click a million times if you accidentaly spammed this script with -s
if ! pgrep maim > /dev/null
    # make sure directory exists so we can actually save the image there
    mkdir -p $scr_dir/$date_dir

    # screenshot time
    maim -q $scr_options $fullpath

    # oxipng can only optimze png images
    if test $_flag_c; and test "$extension" = "png"
        oxipng -o 3 $fullpath > /dev/null &
    end

    dunstify -r 5557 -a screenshot "Cheese!" "Screenshot saved as\n"$image_name.$extension
    wait
end
