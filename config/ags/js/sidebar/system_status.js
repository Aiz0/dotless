import Widget from "resource:///com/github/Aylur/ags/widget.js";
import { cpu, ram, gpu } from "../variables.js";
import icons from "../icons.js";

const Status = ({ variable, icon = "" } = {}) =>
  Widget.Box({
    children: [
      Widget.CircularProgress({
        className: "rounded-full text-[0.25rem] text-pink-400 bg-slate-700",
        startAt: 0.75,
        value: variable.bind(),
        child: Widget.Label({
          label: icon,
          className: "text-2xl",
        }),
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
