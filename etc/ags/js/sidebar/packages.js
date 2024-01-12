
import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import { packageUpdates } from '../variables.js'
import icons from '../icons.js'
import IconButton from '../widgets/icon_button.js'

export default () =>
    IconButton({
        label: icons.packages,
        tooltipText: packageUpdates.bind().transform(val => `${val} update${val == 0 ? '' : 's'} available`),
        visible: packageUpdates.bind(),
    })

