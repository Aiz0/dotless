
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { getBEMClassName } from '../utils.js';
import { packageUpdates } from '../variables.js';
import icons from '../icons.js';

const Packages = () => Widget.Button({
    className: getBEMClassName('sidebar', 'button', ['discrete']),
    cursor: 'pointer',
    child: Widget.Box({
        vertical: true,
        children: [
            Widget.Label({
                className: getBEMClassName('sidebar', 'label', ['huge','red']),
                label: icons.packages,
            }),
            Widget.Label({
                className: getBEMClassName('sidebar', 'label', ['small']),
                label: packageUpdates.bind().transform(packages => packages.toString()),
            }),
        ],
        visible: packageUpdates.bind(),
    }),
})

export default Packages
