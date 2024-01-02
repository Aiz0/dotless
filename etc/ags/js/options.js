
import App from 'resource:///com/github/Aylur/ags/app.js';

export default {
    path: {
        scss: App.configDir + '/style/main.scss',
        css: App.configDir + '/dist/main.css',
        script: App.configDir + '/scripts',
        checkUpDB: '/tmp/checkup-db-1000/',
    },

    poll: {
        short: 1000, // 1s
        system: 10000, // 10s
    },
    riverTags: ['一','二','三','四','五','六','七','八','九'],

    monitors: [
        "LGElectronics",
        "BNQ"
    ]
}
