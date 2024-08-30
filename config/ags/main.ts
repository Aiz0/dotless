import options from "./js/options.js";
import Sidebar from "./js/sidebar/sidebar.js";
import Gdk from "gi://Gdk";
import Gtk from "types/@girs/gtk-3.0/gtk-3.0.js";

Utils.exec(
  `bash -c "cd ${App.configDir};
  bunx tailwindcss -i ${options.path.input_css} -o ${options.path.css};
  sed -i 's/:hover/__TEMP_HOVER__/' ${options.path.css};
  sed -i 's/:active/__TEMP_ACTIVE__/' ${options.path.css};
  bunx postcss ${options.path.css} -r;
  sed -i 's/__TEMP_HOVER__/:hover/' ${options.path.css};
  sed -i 's/__TEMP_ACTIVE__/:active/' ${options.path.css};"`,
);

function addWindows(windows: Gtk.Window[]) {
  windows.forEach((win) => App.addWindow(win));
}

function addMonitorWindows(gdkmonitor: Gdk.Monitor) {
  App.addWindow(Sidebar(gdkmonitor));
}

Utils.idle(async () => {
  const display = Gdk.Display.get_default();
  for (let m = 0; m < (display?.get_n_monitors() || 1); m++) {
    const monitor = display?.get_monitor(m);
    if (monitor == null) return;
    addMonitorWindows(monitor);
  }

  display?.connect("monitor-added", (disp, monitor) => {
    addMonitorWindows(monitor);
  });

  display?.connect("monitor-removed", (disp, monitor) => {
    App.windows.forEach((win) => {
      if (win.gdkmonitor === monitor) App.removeWindow(win);
    });
  });
});

App.config({
  style: options.path.css,
});
