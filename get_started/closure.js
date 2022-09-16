/*
    Takes a number as its first argument -> first number in desired range of numbers
    Number as second argument -> end of disired range (inclusive)
    If second argument omitted then another function should be returned that expects that agrument 
*/

const range = (start, end) => {
	let arr = []
	for (let i = start; i <= end; i++) {
		arr.push(i)
	}
	if (!end) {
		return (newEnd) => {
			arr = []
			for (let j = start; j <= newEnd; j++) {
				arr.push(j)
			}
			return arr
		}
	}
	return arr
}

module.exports = range
