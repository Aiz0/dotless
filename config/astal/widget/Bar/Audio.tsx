import Astal from "gi://Astal?version=3.0";
import Wp from "gi://AstalWp?version=0.1";
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
      onClickRelease={(self, clickEvent) => {
        if (clickEvent.button == 1) {
          audio?.defaultSpeaker.set_mute(!bind(speaker, "mute").get());
        }
      }}
      onScroll={(self, scrollEvent) => {
        if (scrollEvent.delta_y > 0) {
          speaker.volume -= 0.01; // down
        } else {
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
      onClickRelease={(self, clickEvent) => {
        if (clickEvent.button == Astal.MouseButton.PRIMARY) {
          audio?.defaultMicrophone.set_mute(!bind(microphone, "mute").get());
        }
      }}
      onScroll={(self, scrollEvent) => {
        if (scrollEvent.delta_y > 0) {
          microphone.volume -= 0.01; // down
        } else {
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
