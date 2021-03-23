// Only change code below this line
function firstName(firstName) {
	return firstName.toUpperCase();
}

function lastName(lastName) {
	return lastName.toLowerCase();
}
// Only change code above this line

console.log(firstName("Novak"));
console.log(lastName("Djokovic"));

module.exports = {
	firstName,
	lastName
}