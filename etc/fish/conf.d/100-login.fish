if status is-login
    if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
        river > $XDG_LOG_HOME/river/river.log
    end
end
