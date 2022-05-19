#!/bin/fish

# Super+Period and Mod+Comma to focus the next/previous output
riverctl map normal Super L focus-output next
riverctl map normal Super U focus-output previous

# Super+Shift+{Period,Comma} to send the focused view to the next/previous output
riverctl map normal Super+Shift L send-to-output next
riverctl map normal Super+Shift U send-to-output previous
