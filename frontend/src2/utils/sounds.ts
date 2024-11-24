class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map()
  private isMuted: boolean = false

  constructor() {
    this.loadSounds()
  }

  private loadSounds() {
    const soundFiles = {
      cardPlay: '/sounds/card-play.mp3',
      attack: '/sounds/attack.mp3',
      damage: '/sounds/damage.mp3',
      victory: '/sounds/victory.mp3',
      defeat: '/sounds/defeat.mp3',
      buttonClick: '/sounds/button-click.mp3'
    }

    Object.entries(soundFiles).forEach(([key, path]) => {
      const audio = new Audio(path)
      this.sounds.set(key, audio)
    })
  }

  play(soundName: string) {
    if (this.isMuted) return

    const sound = this.sounds.get(soundName)
    if (sound) {
      sound.currentTime = 0
      sound.play()
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted
    return this.isMuted
  }
}

export const soundManager = new SoundManager()
