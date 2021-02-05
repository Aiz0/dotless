
call plug#begin('$XDG_DATA_HOME/nvim/plugged')

Plug 'neoclide/coc.nvim', {'branch': 'release'}
Plug 'sheerun/vim-polyglot'
Plug 'vim-scripts/loremipsum'
Plug 'lervag/vimtex'
Plug 'sbdchd/neoformat'

call plug#end()

" coc extentions
let g:coc_global_extensions = [
  \ 'coc-css',
  \ 'coc-html',
  \ 'coc-rome',
  \ 'coc-json',
  \ 'coc-tsserver',
  \ 'coc-java',
  \ 'coc-omnisharp',
  \ 'coc-explorer',
  \ ]


" coc tab completion
inoremap <silent><expr> <TAB>
      \ pumvisible() ? "\<C-n>" :
      \ <SID>check_back_space() ? "\<TAB>" :
      \ coc#refresh()
inoremap <expr><S-TAB> pumvisible() ? "\<C-p>" : "\<C-h>"

function! s:check_back_space() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" coc snippets completion
inoremap <expr> <cr> pumvisible() ? "\<C-y>" : "\<CR>"



" symbol renaming.
nmap <leader>rn <Plug>(coc-rename)

" coc explorer
nmap tt :CocCommand explorer<CR>

" statusline
set statusline^=%{coc#status()}%{get(b:,'coc_current_function','')}
