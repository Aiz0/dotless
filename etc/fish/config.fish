if status --is-interactive
    # Zoxide needs to generate shell configuration
    # before any zoxide related aliases
    zoxide init fish | source
    source $__fish_config_dir/abbr.fish
    source $__fish_config_dir/aliases.fish
end

source $__fish_config_dir/variables.fish
source $__fish_config_dir/login.fish

# THEME PURE #
set fish_function_path $__fish_config_dir/functions/theme-pure/functions/ $fish_function_path
source $__fish_config_dir/functions/theme-pure/conf.d/pure.fish
