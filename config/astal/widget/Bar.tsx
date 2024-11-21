import { App, Astal, Gtk, Gdk, Widget } from "astal/gtk3";
import { Variable, GLib, bind, GObject } from "astal";
import Mpris from "gi://AstalMpris";
import Battery from "gi://AstalBattery";
import Wp from "gi://AstalWp";
import Network from "gi://AstalNetwork";
import Tray from "gi://AstalTray";
import River from "gi://AstalRiver";

const display = Gdk.Display.get_default();
function getMonitorPlugName(gdkmonitor) {
  const screen = display.get_default_screen();
  for (let i = 0; i < display.get_n_monitors(); ++i) {
    if (gdkmonitor === display.get_monitor(i))
      return screen.get_monitor_plug_name(i);
  }
}

function SysTray() {
  const tray = Tray.get_default();

  return (
    <box>
      {bind(tray, "items").as((items) =>
        items.map((item) => {
          if (item.iconThemePath) App.add_icons(item.iconThemePath);

          const menu = item.create_menu();

          return (
            <button
              tooltipMarkup={bind(item, "tooltipMarkup")}
              onDestroy={() => menu?.destroy()}
              onClickRelease={(self) => {
                menu?.popup_at_widget(
                  self,
                  Gdk.Gravity.SOUTH,
                  Gdk.Gravity.NORTH,
                  null,
                );
              }}
            >
              <icon gIcon={bind(item, "gicon")} />
            </button>
          );
        }),
      )}
    </box>
  );
}

const river = River.get_default();
function getRiverOutput(gdkmonitor: Gdk.Monitor) {
  const monitor_name = getMonitorPlugName(gdkmonitor);
  return river!.get_output(monitor_name);
}

// gdkmonitor should preferably be removed as a prop
// plug name should be found via widget.get_window
function RiverTags({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  function TagButton(name: string, tag: number, output: River.Output) {
    return (
      <eventbox
        onClickRelease={(self, clickEvent) => {
          switch (clickEvent.button) {
            case 1:
              output.focused_tags = 1 << tag;
              break;
            case 2:
              river!.run_command_async(["set-view-tags", `${1 << tag}`], null);
              break;
            case 3:
              output.focused_tags = output.focused_tags ^ (1 << tag);
              break;
          }
        }}
      >
        {name}
      </eventbox>
    );
  }

  function setup(self: Widget.Box) {}
  return (
    <box
      halign={Gtk.Align.CENTER}
      vertical={true}
      spacing={2}
      setup={(self) => {
        const output = getRiverOutput(gdkmonitor);
        if (output == null) return;
        self.children = [
          "一",
          "二",
          "三",
          "四",
          "五",
          "六",
          "七",
          "八",
          "九",
        ].map((name, i) => TagButton(name, i, output));
      }}
    ></box>
  );
}

function RiverLayout({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  const output = getRiverOutput(gdkmonitor);
  if (output == null) return <></>;
  return <label label={bind(output, "layoutName")} />;
}

function RiverFocusedOutput({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  const output = getRiverOutput(gdkmonitor);
  const plugname = getMonitorPlugName(gdkmonitor);
  return (
    <label
      label={bind(river, "focusedOutput").as((v) =>
        v == plugname ? "󰝥" : "󰝦",
      )}
    />
  );
}

function Time({ format = "%H:%M - %A %e." }): JSX.Element {
  const time = Variable<string>("").poll(
    1000,
    () => GLib.DateTime.new_now_local().format(format)!,
  );

  return (
    <label className="Time" onDestroy={() => time.drop()} label={time()} />
  );
}

export default function Bar(gdkmonitor: Gdk.Monitor) {
  return (
    <window
      className="Bar"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={
        Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.BOTTOM
      }
      application={App}
    >
      <centerbox vertical>
        <box vertical valign={Gtk.Align.START}>
          <Time format="%H/%M" />
        </box>
        <box vertical>
          {river && (
            <>
              <RiverFocusedOutput gdkmonitor={gdkmonitor} />
              <RiverTags gdkmonitor={gdkmonitor} />
              <RiverLayout gdkmonitor={gdkmonitor} />
            </>
          )}
        </box>
        <box vertical valign={Gtk.Align.END}>
          <Time format="%H/%M" />
        </box>
      </centerbox>
    </window>
  );
}
