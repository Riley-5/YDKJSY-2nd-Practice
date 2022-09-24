import { setMaxListeners } from "events"

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
		/*
			Loop from -1 to including 1 to get position before, current and position after
			Map through the reels array and 
			Create a new object to delegate from
			use the for loop i to get the position from the slot object
		*/
		let lines = []
		for (let i = -1; i <= 1; i++) {
			let line = this.reels.map((reel) => {
				let slot = Object.create(reel)
				slot.position =
					(reel.symbols.length + reel.position + i) % reel.symbols.length
				return slot.display()
			})
			console.log(line)
			lines.push(line.join(" | "))
		}
		console.log(lines.join("\n"))
	}
}

slotMachine.spin()
slotMachine.display()
// < | @ | *
// @ | X | <
// X | Y | @

// slotMachine.spin()
// slotMachine.display()
// Z | X | W
// W | Y | $
// $ | Z | *
