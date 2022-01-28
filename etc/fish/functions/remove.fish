function remove --wraps /usr/bin/rm
    command rm -i $argv
end
