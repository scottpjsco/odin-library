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

function createEditIcon(book){
    return createBookElement('div', null, "");
}

function createIcons(){
    const div = createBookElement('div' , null, 'icons');
    const icon1 = document.createElement('img');
    icon1.src = '../icons/star-plus-outline.svg';
    const icon2 = document.createElement('img');
    icon2.src = '../icons/eye-plus-outline.svg';
    const icon3 = document.createElement('img');
    icon3.src = '../icons/source-branch.svg';

    div.appendChild(icon1);
    div.appendChild(icon2);
    div.appendChild(icon3);
    return div;
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
    bookItem.appendChild(createBookElement('button', 'X', 'delete'))
    bookItem.appendChild(createIcons());
    bookItem.appendChild(createEditIcon(book));

    books.insertAdjacentElement("afterbegin", bookItem);
}

function renderBooks () {
    myLibrary.map((book, index) => {
        createBookItem(book,index)
    });
}
renderBooks();

