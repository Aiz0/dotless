import { Variable } from "astal";
import { App, Astal, Gdk, Gtk, Widget } from "astal/gtk3";
import CircularProgress from "../components/CircularProgress";
import Clock from "../components/Clock";
import { Microphone, Speaker } from "./Audio";
import { Notifications } from "./Notifications";
import { PackageUpdates } from "./PackageUpdates";
import { PowerMenu } from "./PowerMenu";
import { RiverFocusedOutput, RiverLayout, RiverTags } from "./River";
import SysTray from "./SysTray";

// System Status
const divide = ([total, free]: string[]) =>
  Number.parseInt(free) / Number.parseInt(total);

const cpu = Variable(0).poll(2000, "top -b -n 1", (out) =>
  divide([
    "100",
    out
      .split("\n")
      .find((line) => line.includes("Cpu(s)"))
      ?.split(/\s+/)[1]
      .replace(",", ".") || "0",
  ]));

const ram = Variable(0).poll(2000, "free", (out) =>
  divide(
    out
      .split("\n")
      .find((line) => line.includes("Mem:"))
      ?.split(/\s+/)
      .splice(1, 2) || ["1", "1"],
  ));

const gpu = Variable(0).poll(
  2000,
  "./scripts/gpu.sh",
  (out) => divide(["100", out]),
);

export default function Bar(gdkmonitor: Gdk.Monitor) {
  return (
    <window
      widthRequest={50}
      className="bg-neutral-800"
      gdkmonitor={gdkmonitor}
      exclusivity={Astal.Exclusivity.EXCLUSIVE}
      anchor={Astal.WindowAnchor.TOP |
        Astal.WindowAnchor.LEFT |
        Astal.WindowAnchor.BOTTOM}
      application={App}
    >
      <centerbox vertical>
        <box vertical valign={Gtk.Align.START} spacing={12}>
          <box halign={Gtk.Align.CENTER}>
            <PowerMenu />
          </box>
          <CircularProgress variable={cpu} icon="󰍛" />
          <CircularProgress variable={gpu} icon="󰢮" />
          <CircularProgress variable={ram} icon="󰞯" />
          <SysTray />

        </box>
        <box vertical>
          <RiverFocusedOutput gdkmonitor={gdkmonitor} />
          <RiverTags gdkmonitor={gdkmonitor} />
          <RiverLayout gdkmonitor={gdkmonitor} />
        </box>
        <box vertical valign={Gtk.Align.END} halign={Gtk.Align.CENTER}>
          <PackageUpdates />
          <Microphone />
          <Speaker />
          <Notifications />
          <Clock format="%H" className="text-2xl font-medium" />
          <Clock format="%M" className="text-2xl font-medium" />
          <label label="🞄" />
          <Clock format="%a" className="text-xl font-medium" />
          <Clock format="%b" className="text-xl font-medium" />
          <Clock format="%-e" className="text-xl font-medium" />
        </box>
      </centerbox>
    </window>
  );
}
