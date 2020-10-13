syntax enable
set number relativenumber
set cursorline
set encoding=utf-8
set hidden
set tabstop=4 shiftwidth=4 softtabstop=4 expandtab smarttab autoindent
set list
set scrolloff=4
set ttimeoutlen=0 notimeout
set viewoptions=cursor,folds,slash,unix
set wrap
set tw=0
set indentexpr=
set foldmethod=indent foldlevel=99 foldenable
set formatoptions-=tc
set splitright splitbelow
set showmode showcmd
set wildmenu
set ignorecase smartcase
set shortmess+=c
set completeopt=longest,noinsert,menuone,noselect,preview
set inccommand=split
set ttyfast
set lazyredraw
set visualbell
set laststatus=2
let mapleader = " "
set hlsearch

" remove all whitespace and newlines at end of file on save
au BufWritePre * %s/\s\+$//e
au BufWritepre * %s/\n\+\%$//e

set updatetime=300
set nobackup
set nowritebackup
set cmdheight=2
