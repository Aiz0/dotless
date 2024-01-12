import Widget from 'resource:///com/github/Aylur/ags/widget.js';

export default ({
    ...rest
}) => Widget.Button({
    className: "icon-button",
    cursor: 'pointer',
    ...rest,
})
