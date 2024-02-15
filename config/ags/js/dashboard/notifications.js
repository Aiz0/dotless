import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import { timeout } from 'resource:///com/github/Aylur/ags/utils.js'
import Notifications from 'resource:///com/github/Aylur/ags/service/notifications.js'
import Notification from '../widgets/notification.js'
import icons from '../icons.js'

const ClearButton = () => Widget.Button({
    label: 'Clear all',
    className: 'button2',
    onClicked: () => Notifications.notifications.forEach((notification, index) => {
            timeout(50 * index, () => notification.close())
        })
})

const Header = () => Widget.Box({
    children: [
        Widget.Label({
            label: 'Notifications',
            className: 'label__headline--large',
        }),
        ClearButton()
    ]
})

const NotificationList = () => Widget.Box({
    vertical: true,
    spacing: 8,
    homogeneous: false,
    children: Notifications.bind('notifications').transform(n => n.reverse().map(Notification)),
    visible: Notifications.bind('notifications').transform(n => n.length > 0),
})

const Placeholder = () => Widget.Box({
    vertical: true,
    visible: Notifications.bind('notifications').transform(n => n.length === 0),
    children: [
        Widget.Label(icons.powermenu.sleep),
        Widget.Label('No notifications'),
    ]
})

const NotificationScroller = () => Widget.Scrollable({
    className: 'notification-list__scroller',
    hscroll: 'never',
    child: Widget.Box({
        vertical: true,
        children:[
            NotificationList(),
            Placeholder(),
        ]
    })
})

export default () => Widget.Box({
    vertical: true,
    children: [
        Header(),
        NotificationScroller(),
    ]
})
