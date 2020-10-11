hi User1 ctermfg=none ctermbg=black
hi User2 ctermfg=black ctermbg=red
hi User3 ctermfg=black ctermbg=green
hi User4 ctermfg=black ctermbg=yellow
hi User5 ctermfg=black ctermbg=blue
hi User6 ctermfg=black ctermbg=magenta
hi User7 ctermfg=black ctermbg=cyan
hi User8 ctermfg=black ctermbg=white
hi User9 ctermfg=none ctermbg=none

set statusline=
set statusline+=%3*\ %f
set statusline+=\ %1*\ %1*%{mode()}
set statusline+=%1*\ %m
set statusline+=%9*%=
set statusline+=\ %1*\ %v:%l\/%L
set statusline+=\ %4*\ %Y
set statusline+=\ "
