set -gx TERM "alacritty"

set -gx EDITOR "nvim"

set -gx QT_STYLE_OVERRIDE kvantum

set -gx PATH $PATH "$HOME/bin" "$XDG_STATE_HOME/cargo/bin"

set -gx DOTBARE_DIR "$XDG_STATE_HOME/dotbare"

set -gx SXHKD_SHELL "/usr/bin/sh"

set -gx MUSIC_PLAYER spotifyd
