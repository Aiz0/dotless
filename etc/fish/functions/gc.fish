function gc
    set message (get_commit_message)
    gum confirm "Commit changes?"  && eval "git commit $message $argv"
end
