import Widget from "resource:///com/github/Aylur/ags/widget.js";
import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import GLib from "gi://GLib";

/** @param {import('types/service/notifications').Notification} n */
const NotificationIcon = ({ app_entry, app_icon, image }) => {
  if (image) {
    return Widget.Box({
      vpack: "start",
      hexpand: false,
      class_name: "bg-contain bg-no-repeat bg-center min-size-icon",
      css: `background-image: url("${image}");`,
    });
  }

  let icon = "dialog-information-symbolic";
  if (Utils.lookUpIcon(app_icon)) icon = app_icon;

  if (Utils.lookUpIcon(app_entry || "")) icon = app_entry || "";

  return Widget.Box({
    vpack: "start",
    hexpand: false,
    class_name: "min-size-icon",
    child: Widget.Icon({
      icon,
      size: 32,
      hpack: "center",
      hexpand: true,
      vpack: "center",
      vexpand: true,
    }),
  });
};

/** @param {import('types/service/notifications').Notification} notification */
export default (notification) => {
  const text = Widget.Box({
    className: "px-7",
    vertical: true,
    children: [
      Widget.Label({
        label: notification.summary,
        className: "text-xl",
        truncate: "end",
        hpack: "start",
      }),
      Widget.Label({
        label: notification.body,
        use_markup: true,
        hpack: "start",
        truncate: "end",
        justification: "left",
        wrap: true,
      }),
    ],
  });

  const content = Widget.CenterBox({
    startWidget: NotificationIcon(notification),
    centerWidget: text,
    endWidget: Widget.Label({
      hpack: "end",
      justification: "right",
      label: GLib.DateTime.new_from_unix_local(notification.time).format(
        "%H:%M"
      ),
    }),
  });

  const actions = Widget.Box({
    hpack: "end",
    children: [
      notification.actions.map((action) =>
        Widget.Button({
          className:
            "rounded-full p-3 hover:bg-pink-500/15 active:bg-pink-500/50",
          label: action.label,
        })
      ),
      Widget.Button({
        className:
          "rounded-full p-3 hover:bg-pink-500/15 active:bg-pink-500/50",
        label: "Close",
        onClicked: () => notification.close(),
      }),
    ].flat(),
  });

  return Widget.EventBox({
    onPrimaryClick: () => notification.dismiss(),
    child: Widget.Box({
      class_name: `bg-neutral-800 text-white rounded-2xl min-w-96 px-4 pt-7 pb-5`,
      vertical: true,
      vexpand: false,
      children: [content, actions],
    }),
  });
};
