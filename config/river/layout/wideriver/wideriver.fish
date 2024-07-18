#!/bin/fish
wideriver  \
   --layout                       left        \
   --layout-alt                   monocle     \
   --stack                        dwindle     \
   --count-master                 1           \
   --ratio-master                 0.50        \
   --count-wide-left              0           \
   --ratio-wide                   0.35        \
   --no-smart-gaps                            \
   --inner-gaps                   4           \
   --outer-gaps                   4           \
   --border-width                 2           \
   --border-width-monocle         2           \
   --border-width-smart-gaps      0           \
   --border-color-focused         "0x38bdf8"  \
   --border-color-focused-monocle "0x0284c7"  \
   --border-color-unfocused       "0x082f49"  \
   --log-threshold                info
