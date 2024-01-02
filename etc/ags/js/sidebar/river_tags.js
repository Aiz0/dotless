import Widget from 'resource:///com/github/Aylur/ags/widget.js';

import { riverState } from '../variables.js';
import { getBEMClassName, focusRiverTag, toggleRiverTag } from '../utils.js';
import options from '../options.js';


// TODO move to utils

// simplify?
function getModifiers(riverState, tag, monitor) {
    const output = options.monitors[monitor]
    const modifiers = ['large', 'round']
    // Urgent
    if (riverState?.urgency?.[output]?.includes(tag.toString())){
        modifiers.push('urgent')
    }
    if (riverState?.tags?.[output]?.includes(tag.toString())){
        modifiers.push('selected')
    } else if (!riverState?.viewstag?.[output]?.includes(tag)){
        modifiers.push('discrete', 'inactive')
    }
    // Tag incactive
    return modifiers

    
}

const RiverTag = (name, tag, monitor, block) => Widget.Button({
    label: name,
    widthRequest:40,
    heightRequest:40,
    cursor: 'pointer',
    onPrimaryClickRelease: () => focusRiverTag(tag),
    onSecondaryClickRelease: () => toggleRiverTag(tag),
    setup: self => self.hook(riverState, () => {
        self.className = getBEMClassName(block, 'button', getModifiers(riverState.value, tag, monitor))
    })
})

export default ( monitor, block) =>
    Widget.Box({
        hpack:'center',
        //className: getBEMClassName(block, 'container'),
        vertical: 'true',
        children: options.riverTags.map((name, i) => RiverTag(name, i + 1, monitor, block))
    })
