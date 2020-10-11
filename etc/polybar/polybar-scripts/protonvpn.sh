#!/bin/fish

# Simple fish script to tell if protonvpn-cli is connected
# Since it uses openvpn I pgrep openvpn to check if it's running 
if pgrep openvpn > /dev/null
    echo ""
else
    echo "󰻌"
end
       
       
