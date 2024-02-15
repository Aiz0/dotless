if status is-login
    if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
        systemd-cat --identifier=river river
    end
end
