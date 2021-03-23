// Only change code below this line
class Person {
	constructor(name, email, age) {
		this.name = name;
		this.email = email;
		this.age = age;		
	} 

	getPerson() {
		let personInfo = `Name: ${this.name}, email: ${this.email}, age: ${this.age}`
		return personInfo;	
	}
}
// Only change code above this line

let roger = new Person ("Roger","roger.mail.com",39);
console.log(roger.getPerson());

module.exports = Person;