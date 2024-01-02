
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { getBEMClassName } from '../utils.js';

export default ({
    format = '%H:%M:%S %B %e. %A',
    interval = options.poll.short,
    block = '',
    modifiers = [],
    ...rest
} = {}) =>
    Widget.Label({
        className: getBEMClassName(block, 'label', modifiers),
        ...rest,
    }).poll(interval, self => {
        self.label = GLib.DateTime.new_now_local().format(format).trim() || 'wrong format'
    });
