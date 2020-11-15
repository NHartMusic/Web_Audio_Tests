const ctx = new (window.AudioContext || window.webkitAudioContext)()

const osc = ctx.createOscillator()

osc.connect(ctx.destination)

// osc.frequency.value = 610

osc.start(0)
// osc.stop(0.5)

const frequencyRange = document.querySelector('input')

frequencyRange.addEventListener('input', (e) => {
    console.log(e.target.value)
    osc.frequency.value = e.target.value
})

