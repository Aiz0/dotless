import { riverState } from "../variables.js";

export default (monitor) =>
  Widget.Box({
    hpack: "center",
    vertical: true,
    spacing: 2,
    class_name: "min-h-[30px]",
    children: [
      Widget.Label({
        label: riverState.bind().as((value) => value.layout?.toString() || ""),
      }),
    ],
  });
