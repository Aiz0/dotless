import Notifications from "./notifications.js";
import RiverTags from "./river_tags.js";
import RiverLayout from "./river_layout.js";
import Clock from "./clock.js";
import VPN from "./vpn.js";
import SystemStatus from "./system_status.js";
import Packages from "./packages.js";
import DiskUsage from "./disk_usage.js";
import PowerMenu from "./power_menu.js";
import { Volume, Microphone } from "./audio.js";

// Configure the layout of the Sidebar

const Top = () =>
  Widget.Box({
    vertical: true,
    vpack: "start",
    hpack: "center",
    spacing: 4,
    children: [PowerMenu(), SystemStatus(), DiskUsage()],
  });

const Center = (monitor: number) =>
  Widget.Box({
    vertical: true,
    hpack: "center",
    children: [RiverLayout(monitor), RiverTags(monitor)],
  });

const Bottom = () =>
  Widget.Box({
    vertical: true,
    vpack: "end",
    hpack: "center",
    spacing: 4,
    children: [
      Packages(),
      Microphone(),
      Volume(),
      VPN(),
      Notifications(),
      Clock(),
    ],
  });

const Layout = (monitor: number) =>
  Widget.CenterBox({
    vertical: true,
    startWidget: Top(),
    centerWidget: Center(monitor),
    endWidget: Bottom(),
  });

export default (monitor: number) =>
  Widget.Window({
    name: `sidebar-${monitor}`,
    monitor,
    anchor: ["top", "bottom", "left"],
    exclusivity: "exclusive",
    child: Layout(monitor),
    className: "bg-neutral-800",
  });
