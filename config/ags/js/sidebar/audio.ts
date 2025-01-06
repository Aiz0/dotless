const audio = await Service.import("audio");
import options from "../options.js";
import icons from "../icons.js";
import IconButton from "../widgets/icon_button.js";

export const Volume = () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      onClicked: () => (audio.speaker.is_muted = !audio.speaker.is_muted),
      onScrollUp: () => (audio.speaker.volume += 0.01),
      onScrollDown: () => (audio.speaker.volume -= 0.01),
    }).hook(
      audio,
      (self) => {
        if (!audio.speaker) {
          return;
        }
        self.attribute = {
          ...self.attribute,
          selected: audio.speaker.is_muted || false,
        };
        const vol = audio.speaker.is_muted
          ? 0
          : (audio.speaker.volume ?? 0) * 100;
        const iconName = options.volumeMap.find((i) =>
          i.threshold <= vol
        )?.status || "";
        self.label = icons.audio.volume[iconName];
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
      },
      "speaker-changed",
    ),
  });

export const Microphone = () =>
  Widget.Box({
    hpack: "center",
    child: IconButton({
      onClicked: () => (audio.microphone.is_muted = !audio.microphone.is_muted),
      onScrollUp: () => (audio.microphone.volume += 0.01),
      onScrollDown: () => (audio.microphone.volume -= 0.01),
    }).hook(
      audio,
      (self) => {
        if (!audio.microphone) {
          return;
        }
        self.attribute = {
          ...self.attribute,
          selected: audio.microphone.is_muted || false,
        };
        const iconName = audio.microphone.is_muted ? "off" : "on";
        self.label = icons.audio.microphone[iconName];
        const vol = audio.microphone.volume * 100;
        self.tooltip_text = `Volume ${Math.floor(vol)}%`;
      },
      "microphone-changed",
    ),
  });
