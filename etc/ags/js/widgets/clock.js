
import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import GLib from 'gi://GLib';
import options from '../options.js';
import { getBEMClassName } from '../utils.js';

export default ({
    format = '%F',
    interval = options.poll.short,
    ...rest
} = {}) =>
    Widget.Label({
        className: 'label--large',
        ...rest,
    }).poll(interval, self => {
        self.label = GLib.DateTime.new_now_local().format(format) || 'wrong format'
    });
