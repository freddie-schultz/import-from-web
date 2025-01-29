import { animate } from 'https://cdn.skypack.dev/motion'
import * as Tone from 'https://esm.run/tone'

const synth = new Tone.Synth().toDestination()

Tone.start()

function spin360() {
  animate('#box', { x: 0, rotate: 360 }, { duration: 1 })
  playNote('A3', '16n')
}

function playNote(note, duration) {
  synth.triggerAttackRelease(note, duration)
}

document.querySelector('#spinButton').addEventListener('click', spin360)
