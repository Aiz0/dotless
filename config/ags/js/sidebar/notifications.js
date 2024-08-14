import IconButton from "../widgets/icon_button.js";
import Icons from "../icons.js";

export default () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      label: Icons.notifcations.normal,
      on_clicked: () => Utils.exec("swaync-client -t"),
    }),
  });
