import { riverOutputs } from "../variables.js";
import options from "js/options.js";

export default (monitor: number) =>
  Widget.Box({
    hpack: "center",
    vertical: true,
    spacing: 2,
    class_name: "min-h-[30px]",
    children: [
      Widget.Label({
        label: riverOutputs
          .bind()
          .as(
            (value) =>
              value.find((obj) => obj.name === options.monitors[monitor])
                .layout_name,
          ),
      }),
    ],
  });
