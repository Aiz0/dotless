import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Clock from '../widgets/clock.js';
import { getBEMClassName } from '../utils.js';

const def_modifiers = ['large', 'bold']

const seperator = () => Widget.Label({
    className: getBEMClassName('sidebar', 'label' ['huge', 'bold']),
    label: "🞄",
})

const clocks = ({block} = {}) => Widget.Box({
    vertical: true,
    children:[
        Clock({
            format: '%a',
            block: block,
            modifiers: def_modifiers,
        }),
        Clock({
            format: '%b',
            block: 'sidebar',
            modifiers: def_modifiers
        }),
        Clock({
            format: '%e',
            block: 'sidebar',
            modifiers: def_modifiers
        }),
        seperator(),
        Clock({
            format: '%H',
            block: 'sidebar',
            modifiers: ['huge', 'bold']
            
        }),
        Clock({
            format: '%M',
            block: 'sidebar',
            modifiers: def_modifiers
        }),
    ],
})

export default ({block = ''} = {}) =>
    Widget.Button({
        className: getBEMClassName(block, 'button'),
        child: clocks({block}),
    })

