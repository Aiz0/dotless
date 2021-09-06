# use exa instead of ls
alias ls="exa"
alias tree='exa --tree'
alias l="exa --long --header --git"
alias ll="exa --long --header --git --all"

#z is awkward to press and muscle memory makes me use cd anyways
alias cd=z

# disable rm so i don't accidentally use it
alias rm='echo -e (set_color red) "Use trash-cli instead! rm has been aliased to remove.\c"'
alias remove=/bin/rm

alias t5='cd /run/media/aiz/Samsung_T5'
