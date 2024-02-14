#!/bin/fish

# all inputs
set inputs "$(riverctl list-inputs)"

# easily list input names of a certain type
function list-input-type -a input_type
    # match the line before type: input_type
    string match --regex --all --quiet ".+(?=\n\ttype: $input_type)" $inputs
end

# configure all pointers
for pointer in (list-input-type pointer)
    riverctl input $pointer accel-profile none
end
