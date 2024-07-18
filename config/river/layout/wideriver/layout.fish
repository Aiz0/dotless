#!/bin/fish
set layout wideriver
riverctl default-layout $layout
systemctl --user start $layout

riverctl map normal Super+Shift Space send-layout-cmd wideriver "--layout-toggle"
