import Widget from 'resource:///com/github/Aylur/ags/widget.js'

const clock = (timeZone) =>
    Widget.Box({
        vertical: true,
        children: [
            Widget.Label({
                label: timeZone.replace(/.*\//,'').replace('_', ' '),
                className: 'label--title',
                hpack: 'start'
            }),
            Widget.Label({
                className: 'label--headline',
            })
            .poll(1000, self => {
                self.label = new Date().toLocaleString('sv-SE', {timeZone})
            }),
        ]
    })

export default () =>
    Widget.Box({
        vertical: true,
        children: [
            clock('Europe/Stockholm'),
            clock('America/Los_Angeles'),
            clock('Japan'),
        ]
    })
