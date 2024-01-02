import Widget from "resource:///com/github/Aylur/ags/widget.js";
import SystemTray from "resource:///com/github/Aylur/ags/service/systemtray.js";
import { getBEMClassName } from '../utils.js';

const SysTrayItem = item => Widget.Button({
    child: Widget.Icon({size: 20}).bind('icon', item, 'icon'),
    cursor: 'pointer',
    tooltipMarkup: item.bind('tooltip-markup'),
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

export default () => {
    return Widget.Box({
        className: getBEMClassName('sidebar', 'container' ['discrete']),
        vertical: true,
        spacing: 6,
        children: SystemTray.bind("items").transform(items => {
            const vpn = items.find(item => item.id == 'proton-vpn-app')
            if (vpn){ return [SysTrayItem(vpn)]}
        })
    })
}
