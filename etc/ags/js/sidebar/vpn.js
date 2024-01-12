import Widget from "resource:///com/github/Aylur/ags/widget.js";
import SystemTray from "resource:///com/github/Aylur/ags/service/systemtray.js";
import IconButton from "../widgets/icon_button.js";
import { getBEMClassName } from '../utils.js';

const SysTrayItem = item => IconButton({
    child: Widget.Icon({size: 24}).bind('icon', item, 'icon'),
    tooltipMarkup: "Open Proton VPN",
    //todo launch proton vpn on click.
    onPrimaryClick: (_, event) => item.activate(event),
    onSecondaryClick: (_, event) => item.openMenu(event),
});

export default () => {
    return Widget.Box({
        hpack: 'center',
        children: SystemTray.bind("items").transform(items => {
            const vpn = items.find(item => item.id == 'proton-vpn-app')
            if (vpn){ return [SysTrayItem(vpn)]}
        })
    })
}
