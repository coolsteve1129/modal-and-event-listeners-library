//const openButton = document.querySelectorAll('[data-modal-target]')
//booklist logic variables
const bookList = document.getElementById('bookList')
//modal variables
const openBtn = document.getElementById('newBookBtn')
const closeBtn = document.getElementById('closeBtn')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
//form variables
const formData = document.getElementById("myForm")
let myLibrary = [];

//library functions
function Book(author, title, pages, isRead) {
    let book = {
    author: author,
    title: title,
    pages: pages,
    isRead: isRead == true ? "yes" : "no"
    }
    return book;
  }
  addBookToLibrary("Roger Steinbeck", "Of Mice and Men", "72", true)
  addBookToLibrary("Mark Twain", "Huckleberry Fin", "366", true)
  function addBookToLibrary(author, title, pages, isRead) {
  myLibrary.push(Book(author, title, pages, isRead))   
}

//foreach loop to populate List of elements
//containing books
function refreshList(){
bookList.innerHTML = ""    
myLibrary.forEach(function addBookToList(book, index){
const bookDiv = document.createElement('li');
bookDiv.setAttribute("id", [index + 1])
bookDiv.textContent = "Book " + [index + 1]
    + ": Title: " + book.title
    + " Author: " + book.author
    + " Pages: " + book.pages
    + " Have you read this book?: " + book.isRead
bookList.appendChild(bookDiv);
})
}
refreshList()

formData.addEventListener("submit", (e) => {
    e.preventDefault();
    let author = document.getElementById("author")
    let title = document.getElementById("title")
    let numOfPgs = document.getElementById("numOfPgs")
    let readStatusArray = document.getElementsByName("readStatus")
    let readStatus = false

    readStatusArray.forEach(function(checkBox, index){
        if(readStatusArray[index].checked){
            console.log(readStatusArray[index].value)
            if(readStatusArray[index].value === "Yes"){
                readStatus = true
            }
        }
    })

    // for(let i = 0; i < readStatusArray.length; i++) {
    //     if(readStatusArray[i].checked){
    //         
    // }
    // }
    //^^how you do the foreach loop with a for loop
    addBookToLibrary(author.value, title.value, numOfPgs.value, readStatus)
    refreshList()
})

//how to do it with a for loop
// for(i=0; i < myLibrary.length; i++){
// const book = document.createElement('div');
// book.setAttribute("id", [i + 1])

// book.textContent = 
//     "Book " +[i+1] +
//     ": Title: " +myLibrary[i].title +
//     " Author: " +myLibrary[i].author +
//     " Pages: " +myLibrary[i].pages +
//     " Is this book finished: " +myLibrary[i].isRead;   

// bookList.appendChild(book);
// }
//modal functions
openBtn.addEventListener('click', () => {
    modal.classList.add("active");
    overlay.classList.add("active");
});
closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
    overlay.classList.remove("active");
});

// openButton.forEach(button => {
//     button.addEventListener('click', () =>{
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal);
//     })
// })
// ^^this is how you would do it if you had 
//multiple buttons to select


