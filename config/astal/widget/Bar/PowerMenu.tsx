import { execAsync } from "astal";
import IconButton from "../components/IconButton";

export function PowerMenu() {
  return (
    <IconButton
      onClicked={() => {
        execAsync("wlogout");
      }}
    >
      <label label="󰐥" />
    </IconButton>
  );
}
