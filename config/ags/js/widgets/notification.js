import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import * as Utils from 'resource:///com/github/Aylur/ags/utils.js';
import GLib from 'gi://GLib';

/** @param {import('types/service/notifications').Notification} n */
const NotificationIcon = ({ app_entry, app_icon, image }) => {
    if (image) {
        return Widget.Box({
            vpack: 'start',
            hexpand: false,
            class_name: 'icon img',
            css: `
                background-image: url("${image}");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
                min-width: 78px;
                min-height: 78px;
            `,
        });
    }

    let icon = 'dialog-information-symbolic';
    if (Utils.lookUpIcon(app_icon))
        icon = app_icon;

    if (Utils.lookUpIcon(app_entry || ''))
        icon = app_entry || '';

    return Widget.Box({
        vpack: 'start',
        hexpand: false,
        class_name: 'icon',
        css: `
            min-width: 78px;
            min-height: 78px;
        `,
        child: Widget.Icon({
            icon, size: 32,
            hpack: 'center', hexpand: true,
            vpack: 'center', vexpand: true,
        }),
    });
};

/** @param {import('types/service/notifications').Notification} notification */
export default notification => {
    const text = Widget.Box({
        className: 'notification__text',
        vertical: true,
        children: [
            Widget.Label({
                label: notification.summary,
                className: 'label__body--large',
                truncate: 'end',
                hpack: 'start',
            }),
            Widget.Label({
                label: notification.body,
                className: 'label__body--medium',
                use_markup: true,
                hpack: 'start',
                justification: 'left',
                wrap: true,
            })
        ]
    })

    const content = Widget.CenterBox({
        startWidget: NotificationIcon(notification),
        centerWidget: text,
        endWidget: Widget.Label({
                class_name: 'label__body--medium',
                hpack: 'end',
                justification: 'right',
                label: GLib.DateTime.new_from_unix_local(notification.time).format('%H:%M'),
            })
    })

    const actions = Widget.Box({
        hpack: 'end',
        children: [
            notification.actions.map(action => Widget.Button({
                className: 'button--text',
                label: action.label
            })),
            Widget.Button({
                className: 'button--text',
                label: 'Close',
                onClicked: () => notification.close(),
            })
        ].flat()
    });

    return Widget.EventBox({
        onPrimaryClick: () => notification.dismiss(),
        child: Widget.Box({
            class_name: `notification notification--${notification.urgency}`,
            vertical: true,
            vexpand: false,
            children: [
                content,
                actions,
            ],
        })
    })
}
