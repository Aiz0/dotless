import Widget from "resource:///com/github/Aylur/ags/widget.js";
import Calendar from "./calendar.js";
import TimeZones from "./timezones.js";
import Notifications from "./notifications.js";

export default () =>
  Widget.Window({
    name: "dashboard",
    className: "bg-neutral-900",
    anchor: ["top", "left"],
    margins: [0, 5],
    monitor: 1,
    visible: true,
    child: Widget.Box({
      vertical: true,
      hpack: "start",
      children: [
        //Avatar(),
        //UpTime(),
        Notifications(),
        TimeZones(),
        //Bluetooth(),
        //Calendar(),
      ],
    }),
  });
