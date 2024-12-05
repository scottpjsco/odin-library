const books = document.querySelector ('.books');

const myLibrary = [{
    title: 'Book1',
    author: 'me',
    pages: 500,
    read: true,
},{
    title: 'Book2',
    author: 'You',
    pages: 5000,
    read: false, 
}];

function createBookElement(el, content, className){
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute("class", className);
    return element;
}

function createReadElement(bookItem, book) {
    let read = document.createElement("div");
    read.setAttribute("class", "book-read");
    read.appendChild(createBookElement("h1", "Read?", "book-read-title"));
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.addEventListener('click', (e) => {
        if(e.target.checked){
            bookItem.setAttribute('class', 'card book read-checked');
            book.read = true;
            renderAndSave();
        } else {
            bookItem.setAttribute('class', 'card book read-unchecked');
            book.read = false;
            renderAndSave();
        }
    })
    if(book.read){
        input.checked = true;
        bookItem.setAttribute('class', 'card book read-checked');
    }
    read.appendChild(input);
    return read;
}

function createBookItem (book,index){
    const bookItem = document.createElement ('div');
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'card book');
    bookItem.appendChild(
        createBookElement('h1', `Title: ${book.title}`, "book-title")
    );
    bookItem.appendChild(
        createBookElement('h1', `Author: ${book.author}`, "book-author")
    );
    bookItem.appendChild(
        createBookElement('h1', `Pages: ${book.pages}`, "book-pages")
    );
    bookItem.appendChild(createReadElement(bookItem,book))

    books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book,index)
    });
}
renderBooks();

