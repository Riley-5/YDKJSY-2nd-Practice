/* 
    Take a start time in hh:mm and meeting duration in minutes 
    Return true if the meeting falls entirely within the workday 
    Return false if the meeting violates the workday bounds 
*/

const dayStart = "07:30"
const dayEnd = "17:45"

const scheduleMeeting = (startTime, durationMinutes) => {}

console.log(scheduleMeeting("7:00", 15))
console.log(scheduleMeeting("7:15", 30))
console.log(scheduleMeeting("7:30", 30))
console.log(scheduleMeeting("11:30", 60))
console.log(scheduleMeeting("17:00", 45))
console.log(scheduleMeeting("17:30", 30))
console.log(scheduleMeeting("18:00", 15))
