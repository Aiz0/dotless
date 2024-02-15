import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import App from 'resource:///com/github/Aylur/ags/app.js'
import icons from '../icons.js'

export default () =>
    Widget.Button({
        className: 'button--image',
        cursor: 'pointer',
        child: Widget.Icon({
            icon: icons.avatar.round,
            size: 40,
        }),
        on_clicked: () => App.ToggleWindow('dashboard'),
    })
