class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book){
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete"> X </a></td>
    `;
    list.appendChild(row);
  }
  showAlert(message, className){
    const div = document.createElement('div');
    // Add classes to div
    div.className = `alert ${className}`;
    // add the text
    div.appendChild(document.createTextNode(message));
    // get the parent
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }
  deleteBook(target){
    target.parentElement.parentElement.remove();
  }
  clearEntries(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event Listeners for adding book
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  const book = new Book(title, author, isbn);
  const ui = new UI();
  // Validation for error
  if(title === '' || author === ''|| isbn === ''){
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    ui.addBookToList(book);
    ui.showAlert('Book Added!', 'success');
    ui.clearEntries();
  }
  e.preventDefault();
});

// Event Listener for deleting book
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  if(e.target.className === "delete"){
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
  }
  e.preventDefault();
})