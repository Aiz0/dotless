
import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { cpu, ram, gpu } from "../variables.js";
import icons from '../icons.js'

const Status = ({
    variable,
    icon = "",
} = {} )=>
    Widget.Box({
        children: [
            Widget.CircularProgress({
                className: 'progress-circle',
                startAt: 0.75,
                value: variable.bind(),
                child: Widget.Label({
                    label: icon,
                    className: 'label--icon'
                })
            }),
        ],
    });


//TODO button styling
export default () =>
    Widget.Box({
        vertical: true,
        hpack: "center",
        spacing: 12,
        children: [
            Status({
                variable: cpu,
                icon: icons.system.cpu,
            }),
            Status({
                variable: gpu,
                icon: icons.system.gpu,
            }),
            Status({
                variable: ram,
                icon: icons.system.ram,
            }),
        ],
    });
