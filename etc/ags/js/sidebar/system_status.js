
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { cpu, ram, gpu } from "../variables.js";
import { getBEMClassName } from "../utils.js";
import icons from '../icons.js'

const Status = ({
    variable,
    icon = "",
    circle_modifiers = [],
    icon_modifiers = ['huge'],
    block
} = {} )=>
    Widget.Box({
        children: [
            Widget.CircularProgress({
                className: getBEMClassName(block, 'circle', circle_modifiers),
                startAt: 0.75,
                value: variable.bind(),
                child: Widget.Label({
                    label: icon,
                    className: getBEMClassName(block, 'label', icon_modifiers)
                })
            }),
        ],
    });


export default ({block} = {}) =>
    Widget.Button({
        class_name: getBEMClassName(block, 'button', ['discrete']),
        cursor: 'pointer',
        child: Widget.Box({
            vertical: true,
            hpack: "center",
            spacing: 12,
            children: [
                Status({
                    variable: cpu,
                    icon: icons.system.cpu,
                    circle_modifiers: ['red'],
                    icon_modifiers: ['larger','red'],
                    block,
                }),
                Status({
                    variable: gpu,
                    icon: icons.system.gpu,
                    circle_modifiers: ['blue'],
                    icon_modifiers: ['larger','blue'],
                    block,
                }),
                Status({
                    variable: ram,
                    icon: icons.system.ram,
                    circle_modifiers: ['green'],
                    icon_modifiers: ['larger','green'],
                    block,
                }),
            ],
        }),
    });
