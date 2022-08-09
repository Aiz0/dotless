function get_commit_message
    set TYPE (gum choose "fix" "feat" "docs" "style" "refactor" "test" "chore" "revert")
    set SCOPE (gum input --placeholder "scope")

    # Since the scope is optional, wrap it in parentheses if it has a value.
    test -n $SCOPE && set SCOPE "($SCOPE)"

    # Pre-populate the input with the type(scope): so that the user may change it
    set SUMMARY (gum input --value "$TYPE$SCOPE: " --placeholder "Summary of this change")
    set DESCRIPTION (gum write --placeholder "Details of this change (CTRL+D to finish)")

    # Commit these changes
    echo -- -m "$SUMMARY" -m "$DESCRIPTION"
end
