#!/usr/bin/fish
set screendir ~/usr/images/scr/linux
set datedir (date "+%Y/%m - %B")
set imagename (date "+%F_T%T")
set extension ".png"
set fullpath {$screendir}/{$datedir}/{$imagename}{$extension}
mkdir -pv {$screendir}/{$datedir}
mv $argv $fullpath
