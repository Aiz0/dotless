import Widget from 'resource:///com/github/Aylur/ags/widget.js'

export default () =>
    Widget.Calendar({
        noMonthChange: false,
        showDayNames: true,
        showDetails: false,
        showHeading: false,
        showWeekNumbers: false,
    })
