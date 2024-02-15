function fish_colemak_vi_key_bindings
    # set qwerty vi keybinds
    fish_vi_key_bindings

    # Move forward. Moving backwards is unchanged
    bind -s --preset -M default i forward-char

    # insert
    bind -s --preset -m insert l repaint-mode
    bind -s --preset -m insert L beginning-of-line repaint-mode


    bind -s --preset e up-or-search
    bind -s --preset n down-or-search

    bind -s --preset N end-of-line delete-char
    bind -s --preset E 'man (commandline -t) 2>/dev/null; or echo -n \a'

    #
    # visual mode
    #

    bind -s --preset -M visual i forward-char

    bind -s --preset -M visual e up-line
    bind -s --preset -M visual n down-line

end
