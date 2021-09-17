# Install plug.kak
evaluate-commands %sh{
    plugins="$kak_config/plugins"
    mkdir -p "$plugins"
    [ ! -e "$plugins/plug.kak" ] && \
        git clone -q https://github.com/andreyorst/plug.kak.git "$plugins/plug.kak"
    printf "%s\n" "source '$plugins/plug.kak/rc/plug.kak'"
}

#
# Plugin Configuration
#
plug "andreyorst/plug.kak" noload

plug "lePerdu/kakboard" %{
	hook global WinCreate .* %{ kakboard-enable }
}

plug "andreyorst/smarttab.kak" defer smarttab %{
    set-option global softtabstop 4
} config %{
	hook global WinSetOption filetype=.* expandtab
}

plug "andreyorst/powerline.kak" defer powerline %{
    set-option global powerline_format 'git bufname langmap mode_info filetype client session line_column position'
} config %{
    powerline-start
}

plug "eraserhd/parinfer-rust" do %{
    cargo install --force --path .
    cargo clean
} config %{
    hook global WinSetOption filetype=(clojure|lisp|scheme|racket) %{
        parinfer-enable-window -smart
    }
}
