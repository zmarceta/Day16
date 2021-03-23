// Only change code below this line
class Book {
	constructor(title) {
		this.title = title;		
	}

	get title() {
		return this._title;
	}

	set title(newTitle) {
		this._title = newTitle;
	}
}

// Only change code above this line

const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;