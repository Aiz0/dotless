import { diskUsage } from "../variables.js";
import IconButton from "../widgets/icon_button.js";
import icons from "../icons.js";
import options from "../options.js";

//TODO make bar smaller
const Bar = (mount:string) =>
  Widget.ProgressBar({
    vertical: true,
    inverted: true,
    className: "progress-bar",
    value: diskUsage.bind().transform((disks) => disks[mount].percent),
  });

//TODO button styling
export default () =>
  Widget.Box({
    vertical: true,
    children: [
      IconButton({
        label: icons.system.disk,
      }),
      Widget.Box({
        hpack: "center",
        spacing: 4,
        children: options.disks.map(Bar),
      }),
    ],
  });
