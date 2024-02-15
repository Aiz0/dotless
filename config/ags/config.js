import { forMonitors } from './js/utils.js'
import options from './js/options.js'
import Sidebar from './js/sidebar/config.js'
import Notifications from './js/notifications/config.js'
import PowerMenu from './js/powermenu/config.js'
import DashBoard from './js/dashboard/config.js'

const windows = () => [
    forMonitors(Sidebar),
    forMonitors(Notifications),
    PowerMenu(),
    DashBoard(),
    //Test()
]

export default {
    style: options.path.css,
    windows: windows().flat(),
};

