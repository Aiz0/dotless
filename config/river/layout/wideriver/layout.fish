#!/bin/fish
set layout wideriver
riverctl default-layout $layout

riverctl map normal Super+Shift Space send-layout-cmd $layout "--layout-toggle"
riverctl map normal Super m send-layout-cmd $layout '--ratio -0.05'
riverctl map normal Super i send-layout-cmd $layout '--ratio +0.05'
