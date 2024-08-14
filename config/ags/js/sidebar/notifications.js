import IconButton from "../widgets/icon_button.js";
import Icons from "../icons.js";
import { swaync } from "../variables.js";

export default () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      label: Icons.notifcations.normal,
      on_clicked: () => Utils.exec("swaync-client --toggle-panel"),
      onSecondaryClickRelease: () => Utils.exec("swaync-client --toggle-dnd"),
    }).hook(swaync, (self) => {
      if (swaync.value.dnd) {
        self.label = Icons.notifcations.dnd;
      } else if (swaync.value.count > 0) {
        self.label = Icons.notifcations.badge;
      } else {
        self.label = Icons.notifcations.normal;
      }
      self.attribute = {
        ...self.attribute,
        selected: swaync.value.visible || false,
      };
    }),
  });
