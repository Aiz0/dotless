"noremap : ;

" Insert key
noremap u i
noremap U I

" Undo
noremap l u;

" Cursor Movement
noremap <silent> h h
noremap <silent> n j
noremap <silent> e k
noremap <silent> i l
noremap <silent> gn gj
noremap <silent> ge gk

" Faster up and down
noremap <silent> N 5j
noremap <silent> E 5k

" Faster Home and end
noremap <silent> H 0
noremap <silent> I $

" Faster in-line navigation
noremap W 5w
noremap B 5b

" Ctrl + U or E will move up/down the view port without moving the cursor
noremap <C-U> 5<C-e>
noremap <C-E> 5<C-n>

" Command Mode Cursor Movement

cnoremap <C-a> <Home>
cnoremap <C-e> <End>
cnoremap <C-p> <Up>
cnoremap <C-n> <Down>
cnoremap <C-b> <Left>
cnoremap <C-f> <Right>
cnoremap <M-b> <S-Left>
cnoremap <M-w> <S-Right>


" Searching
noremap - N
noremap = n

" switching window
noremap <LEADER>w <C-w>w
noremap <LEADER>h <C-w>h
noremap <LEADER>n <C-w>j
noremap <LEADER>e <C-w>k
noremap <LEADER>i <C-w>l

noremap s <nop>

" split the screens to up (horizontal), down (horizontal), left (vertical), right (vertical)

noremap sh :set nosplitright<CR>:vsplit<CR>:set splitright<CR>
noremap sn :set splitbelow<CR>:split<CR>
noremap se :set nosplitbelow<CR>:split<CR>:set splitbelow<CR>
noremap si :set splitright<CR>:vsplit<CR>

noremap SH :vertical resize-5<CR>
noremap SN :res -5<CR>
noremap SE :res +5<CR>
noremap SI :vertical resize+5<CR>
