import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import App from 'resource:///com/github/Aylur/ags/app.js'
import Icons from '../icons.js'
import IconButton from '../widgets/icon_button.js'

export default () => IconButton({
    label: Icons.powermenu.shutdown,
    on_clicked: () => App.openWindow('powermenu'),
});
