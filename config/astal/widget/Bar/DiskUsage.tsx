import IconButton from "../components/IconButton";
import { bind, Variable } from "astal";

export const diskUsage = Variable([] as {
  filesystem: string,
  size: string,
  used: string,
  avail: string,
  percent: number,
  percent2: number
}[]).poll(
  60000,
  "df --human-readable --local",
  (out) => out
    .split("\n")
    .slice(1)
    .map((string, index) => {
      const strings = string.split(/ +/);
      return {
        filesystem: strings[0],
        size: strings[1],
        used: strings[2],
        avail: strings[3],
        percent: Number(strings[4].slice(0, -1)) / 100,
        percent2: Number(strings[4])
      }
    })
);
export default () => (
  <box vertical>
    <IconButton label="󰋊" />
    <box vertical>
      {diskUsage().as(items => items.map((v) => (
        console.log(v.size)
        // < levelbar
        //   vertical
        //   inverted
        //   heightRequest = { 40}
        //   widthRequest = { 40}
        //   value = { v.percent / v.percent2 }
        //   cssClasses = "progress-bar"
        // />
      )))}
    </box>
  </box>
);
