import Widget from 'resource:///com/github/Aylur/ags/widget.js'
import Audio from 'resource:///com/github/Aylur/ags/service/audio.js'
import options from '../options.js'
import icons from '../icons.js'
import IconButton from '../widgets/icon_button.js'

export const Volume = () =>
    IconButton({
        onClicked: () => Audio.speaker.isMuted = !Audio.speaker.isMuted,
        onScrollUp: () => Audio.speaker.volume += 0.01,
        onScrollDown: () => Audio.speaker.volume -= 0.01,
    }).hook(Audio, self => {
        if (!Audio.speaker){
            return
        }
        const vol = Audio.speaker.volume * 100
        const iconName = options.volumeMap.find(([threshold]) => threshold <= vol)[1]
        self.label = icons.audio.volume[iconName]
        self.tooltipText = `Volume ${Math.floor(vol)}%`
    }, 'speaker-changed')

export const Microphone = () =>
    IconButton({
        onClicked: () => Audio.microphone.isMuted = !Audio.microphone.isMuted,
        onScrollUp: () => Audio.microphone.volume += 0.01,
        onScrollDown: () => Audio.microphone.volume -= 0.01,
    }).hook(Audio, self => {
        if (!Audio.microphone){
            return
        }
        const iconName = Audio.microphone.isMuted ? 'off' : 'on'
        self.label = icons.audio.microphone[iconName]
        const vol = Audio.microphone.volume * 100
        self.tooltipText = `Volume ${Math.floor(vol)}%`
    }, 'microphone-changed')
