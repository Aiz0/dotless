import { forMonitors } from './js/utils.js';
import options from './js/options.js';
import Sidebar from './js/sidebar/config.js';

const windows = () => [
    forMonitors(Sidebar)
]

export default {
    style: options.path.css,
    windows: windows().flat(),
};

