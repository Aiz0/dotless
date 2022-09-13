function gum_commit
    argparse 'dotbare' -- $argv

    set TYPE (gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert")
    set SCOPE (gum input --placeholder "scope")

    # Since the scope is optional, wrap it in parentheses if it has a value.
    test -n $SCOPE && set SCOPE "($SCOPE)"

    # Pre-populate the input with the type(scope): so that the user may change it
    set SUMMARY (gum input --value "$TYPE$SCOPE: " --placeholder "Summary of this change")
    set DESCRIPTION (gum write --placeholder "Details of this change (CTRL+D to finish)")

    if gum confirm "Commit changes?"
        if test $_flag_dotbare
            dotbare commit -m "$SUMMARY" -m "$DESCRIPTION"
        else
            git commit -m "$SUMMARY" -m "$DESCRIPTION"
        end
    end
end
