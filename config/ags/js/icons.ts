import App from "resource:///com/github/Aylur/ags/app.js";

const icons = App.configDir + "/assets/icons/";

export default {
  avatar: {
    square: icons + "avatar.png",
    round: icons + "avatar-round.png",
  },
  notifcations: {
    normal: "󰂚",
    badge: "󱅫",
    dnd: "󰂛",
  },
  packages: "󰓦",
  protonvpn: {
    sign: icons + "proton-vpn-sign.svg",
    connected: icons + "proton-vpn-state-connected.svg",
    disconnected: icons + "proton-vpn-state-disconnected.svg",
  },
  system: {
    cpu: "󰍛",
    ram: "󰞯",
    gpu: "󰢮",
    disk: "󰋊",
  },
  powermenu: {
    shutdown: "󰐥",
    sleep: "󰤄",
    logout: "󰍃",
    reboot: "󰜉",
    lock: "󰌾",
  },
  audio: {
    volume: {
      high: "󰕾",
      medium: "󰖀",
      low: "󰕿",
      muted: "󰝟",
    },
    microphone: {
      on: "󰍬",
      off: "󰍭",
    },
  },
};
