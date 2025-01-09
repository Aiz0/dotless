import { Variable, execAsync } from "astal";
import IconButton from "../components/IconButton";

export function Notifications() {
  const swaync = Variable({ visible: false, dnd: false, count: 0 }).watch(
    ["swaync-client", "--subscribe"],
    (out) => JSON.parse(out),
  );
  return (
    <IconButton
      tooltipText={swaync(
        (v) => `${v.count} notification${v.count != 1 ? "s" : ""}`,
      )}
      selected={swaync((value) => value.visible)}
      onClicked={() => execAsync("swaync-client --toggle-panel")}
      onButtonReleased={(self, event) => {
        if (event.get_button() === 3) {
          execAsync("swaync-client --toggle-dnd");
        }
      }}
      onDestroy={() => swaync.drop()}
    >
      {swaync((value) => {
        if (value.dnd) {
          return "󰂛";
        } else if (value.count > 0) {
          return "󱅫";
        } else {
          return "󰂚";
        }
      })}
    </IconButton>
  );
}
