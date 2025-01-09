import { Widget } from "astal/gtk4";
import { Variable, GLib } from "astal";

export default ({
  format = "%H:%M - %A %e.",
  ...props
}: Widget.LabelProps & { format: string }) => {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return <label {...props} onDestroy={() => time.drop()} label={time()} />;
};
