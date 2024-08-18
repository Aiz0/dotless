import { riverActive } from "../variables.js";
import IconButton from "../widgets/icon_button.js";
import options from "../options.js";

const focusRiverTag = (tag: number) =>
  Utils.exec(options.path.script + "/river-tags --focus " + tag.toString());
const toggleRiverTag = (tag: number) =>
  Utils.exec(options.path.script + "/river-tags --toggle " + tag.toString());

type activetype = {
  output: string;
  id: number;
  active: boolean;
  focused: boolean;
  occupied: boolean;
  urgent: boolean;
};

const RiverTag = (name: string, tag: number, monitor: number) =>
  IconButton({
    label: name,
    onPrimaryClickRelease: () => focusRiverTag(tag),
    onSecondaryClickRelease: () => toggleRiverTag(tag),
  }).hook(riverActive, (self) => {
    const tagState: activetype | undefined = riverActive.value.find(
      (obj: activetype) =>
        obj.output === options.monitors[monitor] && obj.id === tag,
    );
    self.attribute = {
      urgent: tagState?.urgent || false,
      selected: tagState?.focused || false,
      inactive: !tagState?.occupied || false,
    };
  });

export default (monitor: number) =>
  Widget.Box({
    hpack: "center",
    vertical: true,
    spacing: 2,
    children: options.riverTags.map((name, i) =>
      RiverTag(name, i + 1, monitor),
    ),
  });
