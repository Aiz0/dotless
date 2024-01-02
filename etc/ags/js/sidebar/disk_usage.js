import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { diskUsage } from "../variables.js";
import { getBEMClassName } from "../utils.js";
import icons from '../icons.js'

const Bar = ({
    mount,
    block
} = {} )=>
    Widget.Box({
        children: [
            Widget.ProgressBar({
                vertical: true,
                className: getBEMClassName(block, 'progress'),
                value: diskUsage.bind().transform(disks => disks[mount].percent),
            }),
        ],
    });


//TODO make better
export default ({block} = {}) =>
    Widget.Button({
        class_name: getBEMClassName(block, 'button', ['discrete']),
        cursor: 'pointer',
        child: Widget.Box({
            hpack: "center",
            spacing: 4,
            children: [
                Bar({
                    mount: '/',
                    block
                }),
                Bar({
                    mount: '/home',
                    block
                }),
                Bar({
                    mount: '/run/media/aiz/Samsung_T5',
                    block
                }),
                Bar({
                    mount: '/run/media/aiz/data',
                    block
                }),
            ]
        }),
    });
