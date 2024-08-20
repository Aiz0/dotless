import Gtk from "gi://Gtk?version=3.0";
import Gdk from "gi://Gdk";

const display = Gdk.Display.get_default();
export function getMonitorPlugFromWidget(widget: Gtk.Widget) {
  const monitor = widget.get_window();
  if (monitor == null) return null;
  return getMonitorPlug(display?.get_monitor_at_window(monitor));
}
export function getMonitorPlug(gdkmonitor: Gdk.Monitor | undefined) {
  if (display == null) return null;
  const screen = display.get_default_screen();
  for (let i = 0; i < display.get_n_monitors(); ++i) {
    if (gdkmonitor === display.get_monitor(i))
      return screen.get_monitor_plug_name(i);
  }
}
