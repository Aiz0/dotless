import { riverState } from "../variables.js";
import IconButton from "../widgets/icon_button.js";
import options from "../options.js";

const focusRiverTag = (tag: number) =>
  Utils.exec(options.path.script + "/river-tags --focus " + tag.toString());
const toggleRiverTag = (tag: number) =>
  Utils.exec(options.path.script + "/river-tags --toggle " + tag.toString());

const RiverTag = (name: string, tag: number, monitor: number) =>
  IconButton({
    label: name,
    onPrimaryClickRelease: () => focusRiverTag(tag),
    onSecondaryClickRelease: () => toggleRiverTag(tag),
  }).hook(riverState, (self) => {
    const monitorName = options.monitors[monitor];
    self.attribute = {
      urgent: riverState.value.urgency?.[monitorName]?.includes(tag.toString()),
      selected: riverState.value.tags?.[monitorName]?.includes(tag.toString()),
      inactive: !riverState.value.viewstag?.[monitorName]?.includes(tag),
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
