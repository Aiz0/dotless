for envfile in $XDG_CONFIG_HOME/environment.d/*.conf
    set linenumber 0
    for line in (cat $envfile)
        set linenumber (math $linenumber + 1)
        switch $line
            # empty lines
            case ''
                continue
            # commented lines
            case '#*'
                continue
            # variable lines
            # currently assumes have valid variable names
            case '*=*'
                set line (string replace = ' ' $line)
                eval set -gx $line
            # all other lines
            case "*"
                printf '%s:%d: Ignoring incorrectly formatted line: %s\n' \
               "$envfile" $linenumber "$line"
        end
    end
end
