import Widget from 'resource:///com/github/Aylur/ags/widget.js'

import { riverState } from '../variables.js'
import { focusRiverTag, toggleRiverTag } from '../utils.js'
import IconButton from '../widgets/icon_button.js'
import options from '../options.js'

const RiverTag = (name, tag, monitor ) => IconButton({
    label: name,
    onPrimaryClickRelease: () => focusRiverTag(tag),
    onSecondaryClickRelease: () => toggleRiverTag(tag),
    css: 'font-size: 1rem'
}).hook(riverState, self => {
    const monitorName = options.monitors[monitor]
    self.toggleClassName('icon-button--urgent', riverState.value.urgent?.[monitorName]?.includes(tag))
    self.toggleClassName('icon-button--selected', riverState.value.tags?.[monitorName]?.includes(tag.toString()))
    self.toggleClassName('icon-button--inactive', !riverState.value.viewstag?.[monitorName]?.includes(tag))
})

export default ( monitor ) =>
    Widget.Box({
        hpack:'center',
        vertical: 'true',
        spacing: 2,
        children: options.riverTags.map((name, i) => RiverTag(name, i + 1, monitor ))
    })
