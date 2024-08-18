import GLib from "gi://GLib";
import options from "../options.js";
import { LabelProps } from "types/widgets/label.js";

type ClockProps = LabelProps & {
  format?: string;
  interval?: number;
};

export default ({
  format = "%F",
  interval = options.poll.short,
  ...rest
}: ClockProps) =>
  Widget.Label({
    ...rest,
  }).poll(interval, (self) => {
    self.label = GLib.DateTime.new_now_local().format(format) || "wrong format";
  });
