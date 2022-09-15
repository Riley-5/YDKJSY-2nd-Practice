/* 
    Take a start time in hh:mm and meeting duration in minutes 
    Return true if the meeting falls entirely within the workday 
    Return false if the meeting violates the workday bounds 
*/

const dayStart = "07:30"
const dayEnd = "17:45"

const scheduleMeeting = (startTime, durationMinutes) => {
	// Gets minutes by adding durationMinutes to startTime minuts
	let newMins = parseInt(startTime.substring(3)) + durationMinutes
	let hours = parseInt(startTime.substring(0, 2))
	let newTime = ""

	/*
		If the newMins is greater than 60 then increase the hours by 1
		And make the minutes = 00
	*/
	if (newMins === 60) {
		hours += 1
		/*
			If the hours is a single digit append a 0 in front so that the eaqaulity checks work
		*/
		if (hours.toString().length < 2) {
			hours = 0 + hours.toString()
		}
		newTime = `${hours}:00`
	} else {
		newTime = `${hours}:${newMins}`
	}

	/*
		If the startTime is before the day starts or after the day ends return false
		Else if the meeting duration (newTime) is after the day ends return false
		Else return true
	*/
	if (startTime < dayStart || startTime > dayEnd) {
		return false
	} else if (newTime > dayEnd) {
		return false
	} else {
		return true
	}
}

module.exports = scheduleMeeting
