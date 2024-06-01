import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import { exec, execAsync } from "resource:///com/github/Aylur/ags/utils.js";
import Gdk from "gi://Gdk";
import options from "./options.js";

export function range(length, start = 1) {
  return Array.from({ length }, (_, i) => i + start);
}

export function forMonitors(widget) {
  const num_monitors = Gdk.Display.get_default()?.get_n_monitors() || 1;
  return range(num_monitors, 0).map(widget).flat();
}

export function getBEMClassName(block, element, modifiers = []) {
  const blockElement = `${block}__${element}`;
  const classNames = [blockElement];
  for (const modifier of modifiers) {
    classNames.push(`${blockElement}--${modifier}`);
  }
  return classNames.join(" ");
}

// might move somewhere else
export const focusRiverTag = (tag) =>
  exec(options.path.script + "/river-tags --focus " + tag.toString());
export const toggleRiverTag = (tag) =>
  exec(options.path.script + "/river-tags --toggle " + tag.toString());
