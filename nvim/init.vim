call plug#begin('~/.vim/plugged')

Plug 'morhetz/gruvbox'
Plug 'reasonml-editor/vim-reason-plus'
Plug 'autozimu/LanguageClient-neovim', {
    \ 'branch': 'next',
    \ 'do': 'bash install.sh',
    \ }
Plug '/usr/bin/fzf'
Plug 'junegunn/fzf.vim'
Plug 'itchyny/lightline.vim'
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
Plug 'junegunn/goyo.vim'
Plug 'slashmili/alchemist.vim'
Plug 'elixir-editors/vim-elixir'
Plug 'w0rp/ale'
Plug 'mxw/vim-jsx'
Plug 'pangloss/vim-javascript'

call plug#end()

let g:ale_fixers = {
\   'javascript': ['prettier'],
\   'css': ['prettier'],
\}
let g:ale_linters_explicit = 1
let g:ale_fix_on_save = 1

let g:LanguageClient_serverCommands = {
    \ 'reason': ['~/bin/reason-language-server.exe']
    \ }


set termguicolors
colorscheme gruvbox
let g:gruvbox_contrast_light = 'hard'
let g:goyo_height = '100%'
set background=dark
set backupcopy=yes

let g:deoplete#enable_at_startup = 1

set shiftwidth=0
set tabstop=2
