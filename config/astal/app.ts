import { App, Gdk, Gtk } from "astal/gtk4";
import { bind, exec } from "astal";
import Bar from "./widget/Bar/Bar";

const style = exec("bunx tailwindcss -i main.css")
  .replace(/::backdrop.*?}\n{2}/s, "") // remove backdrop pseudoclass
  .replace(", ::before, ::after", ""); // remove before & after psudoclasses

print(style);
App.start({
  css: style,
  main() {
    const bars = new Map<Gdk.Monitor, Gtk.Widget>();
    // initialize
    for (const gdkmonitor of App.get_monitors()) {
      bars.set(gdkmonitor, Bar(gdkmonitor));
    }

    // App.connect("monitor-added", (_, gdkmonitor) => {
    //   bars.set(gdkmonitor, Bar(gdkmonitor))
    // })

    // App.connect("monitor-removed", (_, gdkmonitor) => {
    //   bars.get(gdkmonitor)?.destroy()
    //   bars.delete(gdkmonitor)
    // })
  },
});
