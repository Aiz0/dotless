#!/bin/fish

set scr_dir ~/user/images/scr/linux
set date_dir (date "+%Y/%m - %B")
set image_name (date "+%F_T%T")
set extension "png"

set fullpath $scr_dir/$date_dir/$image_name.$extension
mkdir -p $scr_dir/$date_dir

set focused_output (river-bedload -print outputs | jq -j '.[] | select(.focused == true) | .name')
grim -o $focused_output -t ppm - |
satty --output-filename "$fullpath" --filename -
