import Widget from "resource:///com/github/Aylur/ags/widget.js";

import RiverTags from "./river_tags.js";
import Clock from "./clock.js";
import VPN from "./vpn.js";
import SystemStatus from "./system_status.js";
import Packages from './packages.js';
import DiskUsage from './disk_usage.js';
import PowerMenu from './power_menu.js';
import { Volume, Microphone } from './audio.js';

// Configure the layout of the Sidebar


const Top = () => Widget.Box({
    vertical: 'true',
    vpack: 'start',
    hpack: 'center',
    spacing: 4,
    children: [
        SystemStatus(),
        DiskUsage(),
    ],
})

const Center = (monitor, block) => Widget.Box({
    vertical: 'true',
    hpack: 'center',
    children: [
        RiverTags(monitor, block),
    ],
})

const Bottom = () => Widget.Box({
    vertical: true,
    vpack: 'end',
    hpack: 'center',
    spacing: 4,
    children: [
        Packages(),
        Microphone(),
        Volume(),
        VPN(),
        Clock(),
        PowerMenu(),
    ],
})

const Layout = (monitor) => Widget.CenterBox({
    vertical: true,
    startWidget: Top(),
    centerWidget: Center(monitor),
    endWidget: Bottom(),
})


export default (monitor) =>
    Widget.Window({
        name: `sidebar-${monitor}`,
        className: "sidebar",
        monitor,
        anchor: ["top", "bottom", "left"],
        exclusivity: "exclusive",
        child: Layout(monitor)
    });
