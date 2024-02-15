#!/bin/fish

for i in (seq 9)
   set tags (math "2^($i - 1)")
    # Mod+[1-9] to focus tag [0-8]
    riverctl map normal Super $i set-focused-tags $tags

    # Mod+Shift+[1-9] to tag focused view with tag [0-8]
    riverctl map normal Super+Shift $i set-view-tags $tags

    # Mod+Ctrl+[1-9] to toggle focus of tag [0-8]
    riverctl map normal Super+Control $i toggle-focused-tags $tags

    # Mod+Shift+Ctrl+[1-9] to toggle tag [0-8] of focused view
    riverctl map normal Super+Shift+Control $i toggle-view-tags $tagsend
end

# Mod+0 to focus all tags
# Mod+Shift+0 to tag focused view with all tags
set all_tags (math "(2^32) - 1")
riverctl map normal Super 0 set-focused-tags $all_tags
riverctl map normal Super+Shift 0 set-view-tags $all_tags

