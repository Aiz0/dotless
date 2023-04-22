if status is-interactive
    # General
    abbr -ag c   'clear'
    abbr -ag vpn 'protonvpn-cli'

    # git

    abbr -ag g   'git'
    abbr -ag ga  'git add'
    abbr -ag gb  'git branch'
    abbr -ag gbl 'git blame'
    abbr -ag gch 'git checkout'
    #abbr -ag gc  'git commit'
    abbr -ag gcl 'git clone'
    abbr -ag gd  'git diff'
    abbr -ag gf  'git fetch'
    abbr -ag gl  'git log'
    abbr -ag gm  'git merge'
    abbr -ag gp  'git push'
    abbr -ag gpl 'git pull'
    abbr -ag gs  'git status'

    # dotbare
    abbr -ag db  'dotbare'
    abbr -ag dbs 'dotbare fstat'
    #abbr -ag dbc 'dotbare commit'
    abbr -ag dbp 'dotbare push'


    # Kakoune kcr

    abbr -ag k  'kcr edit'
    abbr -ag K  'kcr-fzf-shell'
    abbr -ag KK 'kcr-fzf-shell --working-directory .'
    abbr -ag ks 'kcr shell --session'
    abbr -ag kl 'kcr list'

    abbr -ag :f  'kcr fzf files'
    abbr -ag f:  'kcr-fzf-shell --working-directory . kcr fzf files'
    abbr -ag fm: 'kcr-fzf-shell sidetree --working-directory'

    abbr -ag :g 'kcr fzf grep'
    abbr -ag g: 'kcr-fzf-shell --working-directory . kcr fzf grep'
end
