import { forMonitors } from './js/utils.js'
import options from './js/options.js'
import Sidebar from './js/sidebar/config.js'
import PowerMenu from './js/powermenu/config.js'
import Test from './js/test.js'

const windows = () => [
    forMonitors(Sidebar),
    PowerMenu(),
    //Test()
]

export default {
    style: options.path.css,
    windows: windows().flat(),
};

