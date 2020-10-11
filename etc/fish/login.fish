if status is-login
	if test -z "$DISPLAY" -a "$XDG_VTNR" = 1
		sx
	end
end
