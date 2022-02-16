#!/bin/fish
riverctl default-layout stacktile
systemctl --user start stacktile.service


riverctl map normal Super M     send-layout-cmd stacktile "primary_ratio -0.05"
riverctl map normal Super I     send-layout-cmd stacktile "primary_ratio +0.05"

riverctl map normal Super Minus send-layout-cmd stacktile "all_padding -1"
riverctl map normal Super Plus  send-layout-cmd stacktile "all_padding +1"
