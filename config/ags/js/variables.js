import App from 'resource:///com/github/Aylur/ags/app.js';
import Variable from 'resource:///com/github/Aylur/ags/variable.js';
import { interval, execAsync } from 'resource:///com/github/Aylur/ags/utils.js';
import options from './options.js';


export const riverState = Variable({}, {
    listen: [['ristate', '--tags', '--views-tag', '--urgency'], out => JSON.parse(out)],
})

// Run checkupdates seperatly to cache updates.
// I use checkupdates-systemd from AUR.
// TODO add cached aur.
export const packageUpdates = Variable(5)
interval(options.poll.short, () => execAsync(['pacman', '-Qqu', '--dbpath', options.path.checkUpDB])
    .then(out => packageUpdates.value = out.split('\n').length)
    .catch(out => packageUpdates.value = 0))

// alternative way of doing this
/*
export const packageUpdates = Variable(5, {
    poll: [options.poll.system,
        'bash -c "pacman -Qqu --dbpath ' + options.path.checkUpDB +'| cat"',
            out => out ? out.split('\n').length : 0]
})
*/

// System Status
const divide = ([total, free]) => free / total;

export const cpu = Variable(0, {
    poll: [options.poll.system, 'top -b -n 1', out =>
        divide([100, out.split('\n')
        .find(line => line.includes('Cpu(s)'))
        .split(/\s+/)[1]
        .replace(',', '.')])],
});

export const ram = Variable(0, {
    poll: [options.poll.system, 'free', out =>
        divide(out.split('\n')
        .find(line => line.includes('Mem:'))
        .split(/\s+/)
        .splice(1, 2))],
})

export const gpu = Variable(0, {
    poll: [options.poll.system, options.path.script + '/gpu.sh', out => out / 100 ]
})

export const diskUsage = Variable({}, {
    poll: [options.poll.system, 'df --human-readable --local', out => {
        const disks = {}
        out.split('\n').slice(1).forEach((string, index) => {
            const strings = string.split(/ +/)
            disks[strings[5]] = {
                'filesystem': strings[0],
                'size': strings[1],
                'used': strings[2],
                'avail': strings[3],
                'percent': Number(strings[4].slice(0, -1)) / 100,
                'percent2': strings[4],
            }
        })
        return disks
    }]
})
