import { forMonitors } from "./js/utils.js";
import options from "./js/options.js";
import Sidebar from "./js/sidebar/sidebar.js";

const windows = () => [forMonitors(Sidebar)];

Utils.exec(
  `bash -c "cd ${App.configDir};
  bunx tailwindcss -i ${options.path.input_css} -o ${options.path.css};
  sed -i 's/:hover/__TEMP_HOVER__/' ${options.path.css};
  sed -i 's/:active/__TEMP_ACTIVE__/' ${options.path.css};
  bunx postcss ${options.path.css} -r;
  sed -i 's/__TEMP_HOVER__/:hover/' ${options.path.css};
  sed -i 's/__TEMP_ACTIVE__/:active/' ${options.path.css};"`,
);

App.config({
  style: options.path.css,
  windows: windows().flat(),
});
