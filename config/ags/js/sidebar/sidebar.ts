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
import Gdk from "types/@girs/gdk-3.0/gdk-3.0";
import { getMonitorPlug } from "js/utils.js";

// Configure the layout of the Sidebar

const Top = () =>
  Widget.Box({
    vertical: true,
    vpack: "start",
    hpack: "center",
    spacing: 4,
    children: [PowerMenu(), SystemStatus(), DiskUsage()],
  });

const Center = () =>
  Widget.Box({
    vertical: true,
    hpack: "center",
    children: [RiverLayout(), RiverTags()],
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

const Layout = () =>
  Widget.CenterBox({
    vertical: true,
    startWidget: Top(),
    centerWidget: Center(),
    endWidget: Bottom(),
  });

export default (gdkmonitor: Gdk.Monitor) =>
  Widget.Window({
    gdkmonitor,
    name: `sidebar-${getMonitorPlug(gdkmonitor)}`,
    anchor: ["top", "bottom", "left"],
    exclusivity: "exclusive",
    child: Layout(),
    className: "bg-neutral-800",
  });
