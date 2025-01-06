import { Variable, interval, execAsync } from "astal";
import IconButton from "../components/IconButton";

export function PackageUpdates() {
  const pacman = Variable(0);
  interval(5000, () =>
    execAsync(["pacman", "-Qqu", "--dbpath", "/tmp/checkup-db-0"])
      .then((out) => pacman.set(out.split("\n").length))
      .catch(() => pacman.set(0)),
  );
  return (
    <IconButton
      label="󰚰"
      tooltipText={pacman((v) => `${v} update${v != 1 ? "s" : ""} available`)}
      visible={pacman(Boolean)}
      onDestroy={() => {
        pacman.drop();
      }}
    />
  );
}
