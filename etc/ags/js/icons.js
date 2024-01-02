import App from 'resource:///com/github/Aylur/ags/app.js';

const icons = App.configDir + '/assets/icons/';

export default {
    packages: '󰓦',
    protonvpn: {
        sign: icons + 'proton-vpn-sign.svg',
        connected: icons + 'proton-vpn-state-connected.svg',
        disconnected: icons + 'proton-vpn-state-disconnected.svg',
    },
    system: {
        cpu:"󰍛",
        ram:"󰞯",
        gpu:"󰢮",
    }
}
