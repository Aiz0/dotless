import { type TrayItem } from "types/service/systemtray";
const systemtray = await Service.import("systemtray");
import IconButton from "../widgets/icon_button.js";

const SysTrayItem = (item: TrayItem | undefined) =>
  IconButton({
    child: Widget.Icon({ size: 24 }).bind("icon", item, "icon"),
    tooltipMarkup: "Open Proton VPN",
    onPrimaryClick: () => Utils.execAsync("protonvpn-app"),
    onSecondaryClick: (_, event) => item.openMenu(event),
  });

export default () => {
  return Widget.Box({
    hpack: "center",
    child: systemtray.bind("items").transform((items) => {
      return SysTrayItem(items.find((item) => item.id == "proton-vpn-app"));
    }),
  });
};
