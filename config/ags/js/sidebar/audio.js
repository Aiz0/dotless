import Audio from "resource:///com/github/Aylur/ags/service/audio.js";
import options from "../options.js";
import icons from "../icons.js";
import IconButton from "../widgets/icon_button.js";

export const Volume = () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      onClicked: () => (Audio.speaker.is_muted = !Audio.speaker.is_muted),
      onScrollUp: () => (Audio.speaker.volume += 0.01),
      onScrollDown: () => (Audio.speaker.volume -= 0.01),
    }).hook(
      Audio,
      (self) => {
        if (!Audio.speaker) {
          return;
        }
        self.attribute = {
          ...self.attribute,
          selected: Audio.speaker.is_muted || false,
        };
        const vol = Audio.speaker.is_muted ? 0 : Audio.speaker.volume * 100;
        const iconName =
          options.volumeMap.find(([threshold]) => threshold <= vol)?.[1] || "";
        self.label = icons.audio.volume[iconName];
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
      },
      "speaker-changed"
    ),
  });

export const Microphone = () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      onClicked: () => (Audio.microphone.is_muted = !Audio.microphone.is_muted),
      onScrollUp: () => (Audio.microphone.volume += 0.01),
      onScrollDown: () => (Audio.microphone.volume -= 0.01),
    }).hook(
      Audio,
      (self) => {
        if (!Audio.microphone) {
          return;
        }
        self.attribute = {
          ...self.attribute,
          selected: Audio.microphone.is_muted || false,
        };
        const iconName = Audio.microphone.is_muted ? "off" : "on";
        self.label = icons.audio.microphone[iconName];
        const vol = Audio.microphone.volume * 100;
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
      },
      "microphone-changed"
    ),
  });
