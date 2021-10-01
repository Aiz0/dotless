set -gx TERM "alacritty"

set -gx EDITOR "kak"

set -gx QT_STYLE_OVERRIDE kvantum

set -gx DOTBARE_DIR "$XDG_STATE_HOME/dotbare"

set -gx SXHKD_SHELL "/usr/bin/sh"

set -gx MUSIC_PLAYER spotify

# PATH
fish_add_path "$HOME/bin" "$XDG_STATE_HOME/cargo/bin"
