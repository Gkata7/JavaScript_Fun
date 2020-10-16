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

function getPosts(){
  http.get('http://localhost:3000/posts')
  .then(data => ui.showPosts(data))
  .catch(err => console.log(err));
}

function submitPost(){
  const title = document.querySelector('#title').value;
  const body = document.querySelector('#body').value;
  const data = {
    title,
    body
  }
  // Create Post
  http.post('http://localhost:3000/posts', data)
  .then(data => {
    ui.showAlert('Post Added', 'alert alert-success');
    ui.clearFields();
    getPosts();
  })
  .catch(err => console.log(err));
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