import * as Utils from "resource:///com/github/Aylur/ags/utils.js";
import { exec, execAsync } from "resource:///com/github/Aylur/ags/utils.js";
import Gdk from "gi://Gdk";
import options from "./options.js";

export function range(length, start = 1) {
  return Array.from({ length }, (_, i) => i + start);
}

export function forMonitors(widget) {
  const num_monitors = Gdk.Display.get_default()?.get_n_monitors() || 1;
  return range(num_monitors, 0).flatMap(widget);
}
