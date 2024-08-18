import { packageUpdates } from "../variables.js";
import icons from "../icons.js";
import IconButton from "../widgets/icon_button.js";

export default () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      label: icons.packages,
      tooltipText: packageUpdates
        .bind()
        .transform((val) => `${val} update${val == 0 ? "" : "s"} available`),
      visible: packageUpdates.bind(),
      on_clicked: () => Utils.exec("footclient --hold --no-wait yay"),
    }),
  });
