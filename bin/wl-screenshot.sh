#!/bin/fish
# wayland screenshots
# Area selected with slurp
# Images are grabbed with grim
# compression / optimizing is done with oxipng

# Make sure script isn't already running
if pidof -o %PPID -x (status filename) > /dev/null
    exit 0
end

# parse the command line options
# showcursor - includes the cursor in the screenshot
# select=output - select an output
# select=view - select a view
# select=area - select an area
# compress - compress the image with oxipng
argparse 'show_cursor' 'select=?' 'optimize' 'copy' -- $argv


# where should image be saved
set scr_dir ~/usr/images/scr/linux
set date_dir (date "+%Y/%m - %B")

# what should the image be called
set image_name (date "+%F_T%T")
set extension "png"

set fullpath $scr_dir/$date_dir/$image_name.$extension

# make sure directory exists so we can actually save the image there
mkdir -p $scr_dir/$date_dir



# Show cursor
if test $_flag_show_cursor
    set -a grim_options "-c"
end


# Select a wayland region with slurp
if test $_flag_select
    switch $_flag_select
        case output
            # -o adds predefined rectangles for all outputs and
            # -r requires you to select one
            set slurp_options "-or"
        case view
            echo "Selecting a view is currently not supported!"
            # TODO provide slurp with a list of rectangles
            # one for each view
        case area ''
            echo '1'
        case '*'
            echo "Not sure what you want to select"
            exit
    end
    set -a grim_options "-g" (slurp $slurp_options)
    if test $status -ne 0
        echo "No region selected. Exiting."
        exit
    end
end

# Screenshot time
grim $grim_options $fullpath

if test -e $fullpath
    # oxipng can only optimze png images
    if test $_flag_optimize; and test "$extension" = "png"
        oxipng -o 3 $fullpath > /dev/null &
    end

    # copy image to clipboard
    if test $_flag_copy
        wl-copy < $fullpath
    end

    notify-send -r 5557 "Cheese!" "Screenshot saved as\n"$image_name.$extension
end

