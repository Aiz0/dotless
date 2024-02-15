#!/bin/fish

# Super+Period and L+U to focus the next/previous output
riverctl map normal Super L focus-output next
riverctl map normal Super U focus-output previous

# Super+Shift+{L,U} to send the focused view to the next/previous output
riverctl map normal Super+Shift L send-to-output -current-tags next
riverctl map normal Super+Shift U send-to-output -current-tags previous
