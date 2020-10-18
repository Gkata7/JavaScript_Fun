import { http } from './http';
import{ ui } from './ui';

// Get Posts on DOM
document.addEventListener('DOMContentLoaded', getPosts);

// Listen for add post
document.querySelector('.post-submit').addEventListener('click', submitPost);

// Listen for delete
document.querySelector('#posts').addEventListener('click', deletePost);

// Listen for edit
document.querySelector('#posts').addEventListener('click', enableEdit);

// listen for cancel
document.querySelector('.card-form').addEventListener('click', cancelEdit);

function getPosts(){
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const id = document.querySelector('#id').value;
  const data = {
    title,
    body
  }
  // validate input
  if(title === '' || body === ''){
    ui.showAlert('Please fill in all fields', 'alert alert-danger');
  } else {
    // check for ID
    if(id === ''){
      http.post('http://localhost:3000/posts', data)
      .then(data => {
        ui.showAlert('Post Added', 'alert alert-success');
        ui.clearFields();
        getPosts();
      })
      .catch(err => console.log(err));
    } else {
      http.put(`http://localhost:3000/posts/${id}`, data)
      .then(data => {
        ui.showAlert('Post Updated', 'alert alert-success');
        ui.changeFormState('add');
        getPosts();
      })
      .catch(err => console.log(err));
    }
  }
}

// Delete Post
function deletePost(event){
  if(event.target.parentElement.classList.contains('delete')){
    const id = event.target.parentElement.dataset.id;
    if(confirm('Are You Sure?')){
      http.delete(`http://localhost:3000/posts/${id}`)
      .then(data => {
        ui.showAlert('Post Removed', 'alert alert-success');
        getPosts();
      })
      .catch(err => console.log(err));
    }
  }
  event.preventDefault();
}

// Edit posts
function enableEdit(event){
  if(event.target.parentElement.classList.contains('edit')){
    const id = event.target.parentElement.dataset.id;
    const title = event.target.parentElement.previousElementSibling.previousElementSibling.textContent;
    const body = event.target.parentElement.previousElementSibling.textContent;
    const data = {
      id,
      title,
      body
    }
    // Fill Form
    ui.fillForm(data);
  }
  event.preventDefault();
}

// cancel edit state
function cancelEdit(event){
  if(event.target.classList.contains('post-cancel')){
    ui.changeFormState('add');
  }
  event.preventDefault();
}