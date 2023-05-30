let myLibrary = [];

function Book(title, author, noOfPages, readStatus){
 this.title = title;
 this. author = author;
 this.noOfPages = noOfPages;
 this. readStatus = readStatus;
 this.info = () => `${title} by ${author}, ${noOfPages}, ${readStatus} `;
}


function addBookToLibrary() {
 // do stuff here
}

const theHobbit = new Book('The Hobbit', 'Tolkien', '2345 pages', 'finished reading');
console.log(theHobbit.info());