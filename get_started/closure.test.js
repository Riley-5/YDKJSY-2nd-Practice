const range = require("./closure")

test("Range starting at 3 & ending at 3", () => {
	expect(range(3, 3)).toEqual(expect.arrayContaining([3]))
})

test("Range starting at 3 & ending at 8", () => {
	expect(range(3, 8)).toEqual(expect.arrayContaining([3, 4, 5, 6, 7, 8]))
})

test("Range starting at 3 & ending at 0", () => {
	expect(range(3, 3)).toEqual(expect.arrayContaining([]))
})

const start3 = range(3)
const start4 = range(4)

test("Range starting at 3 with no initial end parameter but then provide end at 3", () => {
	expect(start3(3)).toEqual(expect.arrayContaining([3]))
})

test("Range starting at 3 with no initial end parameter but then provide end at 8", () => {
	expect(start3(8)).toEqual(expect.arrayContaining([3, 4, 5, 6, 7, 8]))
})

test("Range starting at 3 with no initial end parameter but then provide end at 0", () => {
	expect(start3(0)).toEqual(expect.arrayContaining([]))
})

test("Range starting at 4 with no initial end parameter but then provide end at 6", () => {
	expect(start4(6)).toEqual(expect.arrayContaining([4, 5, 6]))
})
