import { riverOutputs } from "../variables.js";
import options from "js/options.js";
import { getMonitorPlugFromWidget } from "../utils";

export default () =>
  Widget.Box({
    hpack: "center",
    vertical: true,
    spacing: 2,
    class_name: "min-h-[30px]",
    children: [
      Widget.Label().hook(riverOutputs, (self) => {
        self.label = riverOutputs.value.find(
          (obj) => obj.name === getMonitorPlugFromWidget(self),
        ).layout_name;
      }),
    ],
  });
