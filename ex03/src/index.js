// Only change code below this line
class Person {
	static display() {
		let mesage = "Static method is invoked from Person class";
		return mesage;	
	}
	show() {
		return console.log(Person.display());
	}
}
// Only change code above this line

var message = new Person();
message.show();

module.exports = Person;