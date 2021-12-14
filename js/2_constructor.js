// CONSTRUCTOR 

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function() {
        return `${this.title} was writen by ${this.author} in ${this.year}`
    }
}

// Instatiate an Object
 const book1 = new Book('Book One', 'John Doe', '2013');
 const book2 = new Book('Book Two', 'Jane Doe', '2016');

// To have the title of book1
console.log(book1.title);

// To have the summary
console.log(book2.getSummary);

console.log(book2);