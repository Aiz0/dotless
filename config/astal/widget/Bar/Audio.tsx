import Astal from "gi://Astal";
import Wp from "gi://AstalWp";
import { bind } from "astal";
import IconButton from "../components/IconButton";

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
          speaker.volume -= 0.01; // down
        } else if (dy < 0) {
          speaker.volume += 0.01; //up
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
        print(dx, dy)
        if (dy > 0) {
          microphone.volume -= 0.01; // down
        } else if (dy < 0) {
          microphone.volume += 0.01; //up
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
