#!/bin/fish

# Attach new views at bottom of view stack
riverctl attach-mode bottom

# Default Background color, nice to make sure settings atleast worked
riverctl background-color 0x29B6F6

# Border for Views
riverctl border-width 2
riverctl border-color-unfocused 0x333B47
riverctl border-color-focused 0x64B9F2
# enable borders for all apps
riverctl rule-add -app-id '*' ssd

# Set app-ids of views which should float
riverctl rule-add -app-id 'float*' float
riverctl rule-add -app-id 'popup*' float


## Inputs and related

# Keyboard repeat rate
riverctl set-repeat 40 275
riverctl xcursor-theme "Posy_Cursor_Black" 32

# Hide cursor after 5s
# disabled because it causes issues with zed
#riverctl hide-cursor timeout 5000


# all inputs
set inputs "$(riverctl list-inputs)"
# easily list input names of a certain type
function list-input-type -a input_type
    # match the line before type: input_type
    string match --regex --all --quiet ".+(?=\n\ttype: $input_type)" $inputs
end
# configure all pointers
for pointer in (list-input-type pointer)
    riverctl input $pointer accel-profile none
end
