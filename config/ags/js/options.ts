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

  monitors: ["LGElectronics", "BNQ"],
  disks: ["/", "/home", "/run/media/aiz/Samsung_T5", "/run/media/aiz/data"],
  volumeMap: [
    [101, "overamplified"],
    [67, "high"],
    [34, "medium"],
    [1, "low"],
    [0, "muted"],
  ],
};
