#!/bin/fish
# wayland screenshots
# Area selected with slurp
# Images are grabbed with grim
# compression / optimizing is done with oxipng
# notifications are done with dunstify

# Make sure script isn't already running
if pidof -o %PPID -x (status filename) > /dev/null
    exit 0
end

# parse the command line options
# showcursor - includes the cursor in the screenshot
# output - capture a selected output
# select - select an area
# selectwindow - select a view
# compress - compress the image with oxipng
argparse 'showcursor' 'output' 'select' 'selectview' 'optimize' 'copy' -- $argv

# should cursor be hidden
if test $_flag_showcursor
    set scr_options -c
end

# should an output, area or window be selected
if test $_flag_output
    #TODO
    #set scr_options  -o
end


# where should image be saved
set scr_dir ~/usr/images/scr/linux
set date_dir (date "+%Y/%m - %B")

# what should the image be called
set image_name (date "+%F_T%T")
set extension "png"

set fullpath $scr_dir/$date_dir/$image_name.$extension

# make sure directory exists so we can actually save the image there
mkdir -p $scr_dir/$date_dir

#select area
if test $_flag_select
    set scr_options $scr_options -g (slurp)
else if test $_flag_selectview
    # TODO
    set scr_options $scr_options -g (slurp)
end

# Screenshot time
grim $scr_options $fullpath

if test -e $fullpath
    # oxipng can only optimze png images
    if test $_flag_optimize; and test "$extension" = "png"
        oxipng -o 3 $fullpath > /dev/null &
    end

    # copy image to clipboard
    if test $_flag_copy
        wl-copy < $fullpath
    end

    dunstify -r 5557 -a screenshot "Cheese!" "Screenshot saved as\n"$image_name.$extension
end

