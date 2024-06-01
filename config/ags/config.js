import { forMonitors } from "./js/utils.js";
import options from "./js/options.js";
import Sidebar from "./js/sidebar/config.js";
import Notifications from "./js/notifications/config.js";
import PowerMenu from "./js/powermenu/config.js";
import DashBoard from "./js/dashboard/config.js";

const windows = () => [
  forMonitors(Sidebar),
  forMonitors(Notifications),
  PowerMenu(),
  DashBoard(),
];

Utils.exec(
  `bash -c "cd ${App.configDir};
  bunx tailwindcss -i ${options.path.input_css} -o ${options.path.css};
  sed -i 's/:hover/__TEMP_HOVER__/' ${options.path.css};
  sed -i 's/:active/__TEMP_ACTIVE__/' ${options.path.css};
  bunx postcss ${options.path.css} -r;
  sed -i 's/__TEMP_HOVER__/:hover/' ${options.path.css};
  sed -i 's/__TEMP_ACTIVE__/:active/' ${options.path.css};"`
);

App.config({
  style: options.path.css,
  windows: windows().flat(),
});
