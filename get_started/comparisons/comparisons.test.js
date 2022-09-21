const scheduleMeeting = require("./comparisons")

test("Start time 07:00 and meeting duration of 15 minutes", () => {
	expect(scheduleMeeting("07:00", 15)).toBe(false)
})

test("Start time 07:15 and meeting duration of 30 minutes", () => {
	expect(scheduleMeeting("07:15", 30)).toBe(false)
})

test("Start time 07:30 and meeting duration of 30 minutes", () => {
	expect(scheduleMeeting("07:30", 30)).toBe(true)
})

test("Start time 11:30 and meeting duration of 60 minutes", () => {
	expect(scheduleMeeting("11:30", 60)).toBe(true)
})

test("Start time 17:00 and meeting duration of 45 minutes", () => {
	expect(scheduleMeeting("17:00", 45)).toBe(true)
})

test("Start time 17:30 and meeting duration of 30 minutes", () => {
	expect(scheduleMeeting("17:30", 30)).toBe(false)
})

test("Start time 18:30 and meeting duration of 15 minutes", () => {
	expect(scheduleMeeting("18:30", 15)).toBe(false)
})
