let myLibrary = [new Book("test","xd")];
let displayed = [myLibrary[0].id];

let addButton = document.getElementById("add");
let addForm = document.getElementById("addForm");

let sub = document.getElementById("sub");
let bookContainer = document.createElement("div");

bookContainer.id = "bookContainer";
document.body.appendChild(bookContainer);

let removeButtons = document.querySelectorAll(".remove");


addButton.addEventListener("click",(e) => {
    addForm.style.display = "block";
})

sub.addEventListener("click", (e) => {
    let description = document.getElementById("bookDescription");
    let name = document.getElementById("bookName");
    addBookToLibrary(name.value,description.value);
    displayBooks();
    e.preventDefault();
})

function Book(name,description) {
    this.id = crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.read = false;
}


function addBookToLibrary(name,description) {
    let book = new Book(name,description);
    myLibrary.push(book);
}


function displayBooks() {
    myLibrary.forEach((book) => {
            if (!displayed.includes(book.id)) {
                displayed.push(book.id);
                let div = document.createElement("div");
                let name = document.createElement("div");
                let read = document.createElement('button');
                read.className = "read";
                read.textContent = "Not Read";
                let description = document.createTextNode(book.description);
                
                div.className = "bookDiv";

                name.textContent = book.name;
                name.style.fontWeight = "bold";
                //remove button

                let remove = document.createElement("button");
                remove.textContent = 'remove book';
                remove.className = "remove";
                
                remove.addEventListener("click",(e) => {
                    remove.parentNode.remove();
                    console.log("z")
                })
                
                //read button;
                read.addEventListener("click",(e) => {
                    console.log("oklk")
                    book.read = !book.read;
                    if (book.read) {
                        read.textContent = "Read";
                        read.style.color = "green";
                    } else {
                        read.textContent = "Not Read";
                        read.style.color = "red";
                    }
                })


                div.appendChild(name);
                div.appendChild(description);
                div.appendChild(read);
                div.appendChild(remove);
                bookContainer.appendChild(div);

            }
    })
}




