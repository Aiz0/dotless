import { Gtk, Gdk, Astal } from "astal/gtk4";
import { bind } from "astal";
import River from "gi://AstalRiver";
import IconButton from "../components/IconButton";

const river = River.get_default();

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
        onClicked={() => output.focused_tags = 1 << tag}
        onButtonReleased={(self, event) => {
          switch (event.get_button()) {
            case 2:
              // send view to tag
              river!.run_command_async(["set-view-tags", `${1 << tag}`], null);
              break;
            case 3:
              // toggle tag focus
              output.focused_tags = output.focused_tags ^ (1 << tag);
              break;
          }
        }
        }
      >
        {name}
      </IconButton >
    );
  }
  return (
    <box
      halign={Gtk.Align.CENTER}
      vertical={true}
      spacing={2}
      setup={(self) => {
        const output = river?.get_output(gdkmonitor.get_connector() ?? "")
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
  const output = river?.get_output(gdkmonitor.get_connector() ?? "")

  return <label label={bind(output, "layoutName")} />;
}

export function RiverFocusedOutput({
  gdkmonitor,
}: {
  gdkmonitor: Gdk.Monitor;
}) {
  return (
    <label
      label={
        bind(river, "focusedOutput").as((v) => (v == gdkmonitor.get_connector() ? "󰝥" : "󰝦"))
      }
    />
  );
}
