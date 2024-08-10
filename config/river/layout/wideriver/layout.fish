#!/bin/fish
set layout wideriver
riverctl default-layout $layout

riverctl map normal Super+Shift Space send-layout-cmd $layout "--layout-toggle"
