import Widget from "resource:///com/github/Aylur/ags/widget.js";

import RiverTags from "./river_tags.js";
import Clock from "./clock.js";
import VPN from "./vpn.js";
import SystemStatus from "./system_status.js";
import Packages from './packages.js';
import DiskUsage from './disk_usage.js';

// Configure the layout of the Sidebar


const Top = (block) => Widget.Box({
    vertical: 'true',
    vpack: 'start',
    children: [
        SystemStatus({block}),
        DiskUsage({block}),
    ],
})

const Center = (monitor, block) => Widget.Box({
    vertical: 'true',
    children: [
        RiverTags(monitor, block),
    ],
})

const Bottom = (block) => Widget.Box({
    vertical: true,
    vpack: 'end',
    children: [
        Packages(),
        VPN(),
        Clock({block}),
    ],
})

const Layout = (monitor, block) => Widget.CenterBox({
    vertical: true,
    startWidget: Top(block),
    centerWidget: Center(monitor, block),
    endWidget: Bottom(block),
})


export default (monitor) =>
    Widget.Window({
        name: `sidebar-${monitor}`,
        className: "sidebar",
        monitor,
        anchor: ["top", "bottom", "left"],
        exclusivity: "exclusive",
        defaultWidth: 50,
        resizable: false,
        child: Layout(monitor, 'sidebar')
    });
