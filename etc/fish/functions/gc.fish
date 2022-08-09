function gc
    set message (get_commit_message)
    gum confirm "Commit changes?"  && git commit $message $argv
end
