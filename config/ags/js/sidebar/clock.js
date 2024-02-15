import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Clock from '../widgets/clock.js';
import { execAsync } from 'resource:///com/github/Aylur/ags/utils.js'

const seperator = () => Widget.Label({
    label: "🞄",
})

const clocks = () => Widget.Box({
    vertical: true,
    children:[
        Clock({
            format: '%H\n%M',
            className: 'label--huge',
            justification: 'center',
        }),
        seperator(),
        Clock({
            format: '%a\n%b\n%-e',
            justification: 'center',
        }),
    ],
})

export default () =>
    Widget.Button({
        className: 'button2',
        cursor: 'pointer',
        child: clocks(),
        onClicked: () => execAsync('notify-send Clicked "You clicked on the date button"')
    })

