import Tray from "gi://AstalTray";
import { bind } from "astal";
import { Gtk } from "astal/gtk4";

export default function () {
  const tray = Tray.get_default();

  return (
    <box
      vertical
      spacing={8}
      hexpand={false}
      widthRequest={20}
      visible={bind(tray, "items").as((items) => items.length > 0)}
      cssClasses={["rounded-full", "bg-neutral-700", "py-4", "px-2"]}
    >
      {bind(tray, "items").as((items) =>
        items.map((item) => (
          <menubutton
            tooltipMarkup={bind(item, "tooltipMarkup")}
            actionGroup={bind(item, "action_group").as((ag) => [
              "dbusmenu",
              ag,
            ])}
            menuModel={bind(item, "menu_model")}
          >
            <image iconSize={Gtk.IconSize.LARGE} gicon={bind(item, "gicon")} />
          </menubutton>
        )),
      )}
    </box>
  );
}
