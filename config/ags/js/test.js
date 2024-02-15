import Widget from "resource:///com/github/Aylur/ags/widget.js";
export default () =>
    Widget.Window({
        name: 'testing',
        monitor: 0,
        child: Widget.Button({
            vexpand: false,
            child: Widget.Label({
                label: "test",
            }),
            className: 'test-button',
            onClicked: self => {
                self.toggleClassName('selected', !self.classNames.includes('selected'))
            }
        })
    })
