import options from "./options.js";

export const riverState = Variable(
  {},
  {
    listen: [
      ["ristate", "--tags", "--views-tag", "--urgency"],
      (out) => JSON.parse(out),
    ],
  },
);

export const riverFocus = Variable([], {
  listen: [
    ["river-bedload", "-minified", "-watch", "focused"],
    (out) => JSON.parse(out),
  ],
});

export const riverActive = Variable([], {
  listen: [
    ["river-bedload", "-minified", "-watch", "active"],
    (out) => JSON.parse(out),
  ],
});

export const swaync = Variable(
  {},
  {
    listen: [["swaync-client", "--subscribe"], (out) => JSON.parse(out)],
  },
);

// Run checkupdates seperatly to cache updates.
// I use checkupdates-systemd from AUR.
// TODO add cached aur.
export const packageUpdates = Variable(5);
Utils.interval(options.poll.short, () =>
  Utils.execAsync(["pacman", "-Qqu", "--dbpath", options.path.checkUpDB])
    .then((out) => (packageUpdates.value = out.split("\n").length))
    .catch((out) => (packageUpdates.value = 0)),
);

// System Status
const divide = ([total, free]: string[]) =>
  Number.parseInt(free) / Number.parseInt(total);

export const cpu = Variable(0, {
  poll: [
    options.poll.system,
    "top -b -n 1",
    (out) =>
      divide([
        "100",
        out
          .split("\n")
          .find((line) => line.includes("Cpu(s)"))
          ?.split(/\s+/)[1]
          .replace(",", ".") || "0",
      ]),
  ],
});

export const ram = Variable(0, {
  poll: [
    options.poll.system,
    "free",
    (out) =>
      divide(
        out
          .split("\n")
          .find((line) => line.includes("Mem:"))
          ?.split(/\s+/)
          .splice(1, 2) || ["1", "1"],
      ),
  ],
});

export const gpu = Variable(0, {
  poll: [
    options.poll.system,
    options.path.script + "/gpu.sh",
    (out) => divide(["100", out]),
  ],
});

export const diskUsage = Variable(
  {},
  {
    poll: [
      options.poll.system,
      "df --human-readable --local",
      (out) => {
        const disks = {};
        out
          .split("\n")
          .slice(1)
          .forEach((string, index) => {
            const strings = string.split(/ +/);
            disks[strings[5]] = {
              filesystem: strings[0],
              size: strings[1],
              used: strings[2],
              avail: strings[3],
              percent: Number(strings[4].slice(0, -1)) / 100,
              percent2: strings[4],
            };
          });
        return disks;
      },
    ],
  },
);
