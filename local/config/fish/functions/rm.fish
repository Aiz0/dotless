# Disable rm so i don't accidentally use it
if status is-interactive
    function rm
        set_color red
        echo "Use trash-cli instead!"
        echo "rm has been aliased to remove."
    end
end
