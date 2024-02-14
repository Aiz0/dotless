for line in (systemctl --user show-environment)
    string match -rq '(?<key>.*?)=(?<value>.*)' $line
    set -gx $key $value
end
