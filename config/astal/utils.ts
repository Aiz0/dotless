import { Gdk } from "astal/gtk3";

export function getMonitorPlugName(gdkmonitor: Gdk.Monitor) {
  const display = Gdk.Display.get_default();
  return (
    display
      ?.get_default_screen()
      .get_monitor_plug_name(
        Array(display.get_n_monitors()).findIndex(
          (v, i) => gdkmonitor == display.get_monitor(i),
        ),
      ) ?? null
  );
}
