function dbc
    set message (get_commit_message)
    gum confirm "Commit changes?"  && eval "dotbare commit $message $argv"
end
