#!/bin/fish

# all inputs
# string collect can be replaced with "$(cmd)" in fish 3.4.0
set inputs (riverctl list-inputs | string collect)

# easily list input names of a certain type
function list-input-type -a input_type
    # match the line before type: input_type
    string match --regex --all --quiet ".+(?=\n\ttype: $input_type)" $inputs
end

# configure all pointers
for pointer in (list-input-type pointer)
    riverctl input $pointer accel-profile none
end
