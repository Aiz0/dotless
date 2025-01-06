import { Gtk, Gdk, Widget } from "astal/gtk3";
import { bind } from "astal";
import River from "gi://AstalRiver";
import IconButton from "../components/IconButton";
import { getMonitorPlugName } from "../../utils";

const river = River.get_default();
function getRiverOutput(gdkmonitor: Gdk.Monitor) {
  return river && river.get_output(getMonitorPlugName(gdkmonitor) ?? "");
}

// gdkmonitor should preferably be removed as a prop
// plug name should be found via widget.get_window
export function RiverTags({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  function TagButton(name: string, tag: number, output: River.Output) {
    return (
      <IconButton
        urgent={bind(output, "urgentTags").as((v) => Boolean(v & (1 << tag)))}
        selected={bind(output, "focusedTags").as((v) =>
          Boolean(v & (1 << tag)),
        )}
        inactive={bind(output, "occupiedTags").as(
          (v) => !Boolean(v & (1 << tag)),
        )}
        onClickRelease={(self, clickEvent) => {
          switch (clickEvent.button) {
            case 1:
              // focus tag
              output.focused_tags = 1 << tag;
              break;
            case 2:
              // send view to tag
              river!.run_command_async(["set-view-tags", `${1 << tag}`], null);
              break;
            case 3:
              // toggle tag focus
              output.focused_tags = output.focused_tags ^ (1 << tag);
              break;
          }
        }}
      >
        {name}
      </IconButton>
    );
  }
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

export function RiverLayout({ gdkmonitor }: { gdkmonitor: Gdk.Monitor }) {
  const output = getRiverOutput(gdkmonitor);
  return <label label={!output ? "" : bind(output, "layoutName")} />;
}

export function RiverFocusedOutput({
  gdkmonitor,
}: {
  gdkmonitor: Gdk.Monitor;
}) {
  const plugname = getMonitorPlugName(gdkmonitor);
  return (
    <label
      label={
        !river
          ? ""
          : bind(river, "focusedOutput").as((v) => (v == plugname ? "󰝥" : "󰝦"))
      }
    />
  );
}
