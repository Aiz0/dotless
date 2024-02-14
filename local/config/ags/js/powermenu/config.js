import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import { exec } from 'resource:///com/github/Aylur/ags/utils.js'
import icons from '../icons.js'
import options from '../options.js'
import ShadedPopup from './shaded_popup.js'

const SysButton = (action, label) =>
    Widget.Box({
        vertical: true,
        children: [
            Widget.Button({
                label: icons.powermenu[action],
                className: 'button2 button2--big',
                cursor: 'pointer',
                onClicked: () => exec(options.powerMenu[action]),
            }),
            Widget.Label({
                label,
                className: 'label--large'
            }),
        ],
    });

export default () => ShadedPopup({
    name: 'powermenu',
    expand: true,
    child: Widget.Box({
        className: 'box',
        homogeneous: true,
        children: [
            SysButton('shutdown', 'Shutdown'),
            SysButton('reboot', 'Reboot'),
            SysButton('lock', 'Lock'),
            SysButton('sleep', 'Sleep'),
            SysButton('logout', 'Log Out'),
        ],
    }),
});
