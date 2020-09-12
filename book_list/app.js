// Book Constructor
function Book(title, author, isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}
// UI Constructor
function UI(){}
const ui = new UI();
// Creating book entries
UI.prototype.addBookToList = function(book){
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

// Showing Alert
UI.prototype.showAlert = function(message, className){
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

// Delete Book
UI.prototype.deleteBook = function(target) {
  target.parentElement.parentElement.remove();
}

// Removing book entries
UI.prototype.clearEntries = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  const book = new Book(title, author, isbn);
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
  if(e.target.className === "delete"){
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success');
  }
  e.preventDefault();
})
