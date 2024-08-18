import App from "resource:///com/github/Aylur/ags/app.js";

export default {
  path: {
    input_css: App.configDir + "/style/main.css",
    css: App.configDir + "/dist/main.css",
    script: App.configDir + "/scripts",
    checkUpDB: "/tmp/checkup-db-0/",
  },

  poll: {
    short: 1000, // 1s
    system: 10000, // 10s
  },
  riverTags: ["一", "二", "三", "四", "五", "六", "七", "八", "九"],

  monitors: ["DP-2", "HDMI-A-2"],
  disks: ["/", "/home", "/run/media/aiz/Samsung_T5", "/run/media/aiz/data"],
  volumeMap: [
    { threshold: 101, status: "overamplified" },
    { threshold: 67, status: "high" },
    { threshold: 34, status: "medium" },
    { threshold: 1, status: "low" },
    { threshold: 0, status: "muted" },
  ],
};
