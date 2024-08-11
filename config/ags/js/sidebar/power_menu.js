import Icons from "../icons.js";
import IconButton from "../widgets/icon_button.js";

export default () =>
  IconButton({
    label: Icons.powermenu.shutdown,
    on_clicked: () => Utils.exec("wlogout"),
  });
