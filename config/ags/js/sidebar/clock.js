import Clock from "../widgets/clock.js";

const seperator = () =>
  Widget.Label({
    label: "🞄",
  });

export default () =>
  Widget.Box({
    vertical: true,
    children: [
      Clock({
        format: "%H\n%M",
        class_name: "text-2xl font-medium",
        justification: "center",
      }),
      seperator(),
      Clock({
        format: "%a\n%b\n%-e",
        class_name: "text-xl font-medium",
        justification: "center",
      }),
    ],
  });
