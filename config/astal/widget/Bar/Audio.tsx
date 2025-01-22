import Astal from "gi://Astal";
import Wp from "gi://AstalWp";
import { bind } from "astal";
import IconButton from "../components/IconButton";
import { execAsync } from "astal";

const audio = Wp.get_default()?.audio;
export function Speaker() {
  const speaker = audio?.defaultSpeaker;
  if (speaker === undefined) return <></>;
  return (
    <IconButton
      tooltipText={bind(speaker, "volume").as(
        (v) => `Volume ${Math.floor(v * 100)}%`,
      )}
      selected={bind(speaker, "mute")}
      onClicked={() => {
        audio?.defaultSpeaker.set_mute(!bind(speaker, "mute").get());
      }}
      onScroll={(self, dx, dy) => {
        if (dy > 0) {
          execAsync(["swayosd-client", "--output-volume", "lower"]);
        } else if (dy < 0) {
          execAsync(["swayosd-client", "--output-volume", "raise"]);
        }
      }}
      child={<label label={bind(speaker, "mute").as((v) => (v ? "󰝟" : "󰕾"))} />}
    />
  );
}
export function Microphone() {
  const microphone = audio?.defaultMicrophone;
  if (microphone === undefined) return <></>;
  return (
    <IconButton
      tooltipText={bind(microphone, "volume").as(
        (v) => `Volume ${Math.floor(v * 100)}%`,
      )}
      selected={bind(microphone, "mute")}
      onClicked={() => {
        audio?.defaultMicrophone.set_mute(!bind(microphone, "mute").get());
      }}
      onScroll={(self, dx, dy) => {
        if (dy > 0) {
          execAsync(["swayosd-client", "--input-volume", "lower"]);
        } else if (dy < 0) {
          execAsync(["swayosd-client", "--input-volume", "raise"]);
        }
      }}
      child={
        <label
          label={bind(microphone, "mute").as((v: boolean) => (v ? "󰍭" : "󰍬"))}
        />
      }
    />
  );
}
