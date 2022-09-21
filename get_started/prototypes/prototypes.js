const randMax = (max) => {
	return Math.trunc(1e9 * Math.random()) % max
}

const reel = {
	symbols: ["X", "Y", "Z", "W", "$", "*", "<", "@"],
	spin() {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1)
		}
		this.position = (this.position + 100 + randMax(100)) % this.symbols.length
	},
	display() {
		if (this.position == null) {
			this.position = randMax(this.symbols.length - 1)
		}
		return this.symbols[this.position]
	}
}

const slotMachine = {
	reels: [
		// This slot machine needs 3 seperate reels
		// Hint: Object.create(..)
		Object.create(reel),
		Object.create(reel),
		Object.create(reel)
	],
	spin() {
		this.reels.forEach((reel) => {
			reel.spin()
		})
	},
	display() {
		// TODO
	}
}

slotMachine.spin()
slotMachine.display()
// < | @ | *
// @ | X | <
// X | Y | @

slotMachine.spin()
slotMachine.display()
// Z | X | W
// W | Y | $
// $ | Z | *
