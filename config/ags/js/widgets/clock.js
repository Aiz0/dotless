import GLib from "gi://GLib";
import options from "../options.js";

export default ({
  format = "%F",
  interval = options.poll.short,
  ...rest
} = {}) =>
  Widget.Label({
    ...rest,
  }).poll(interval, (self) => {
    self.label = GLib.DateTime.new_now_local().format(format) || "wrong format";
  });
