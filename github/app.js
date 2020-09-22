const gitHub = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser'); // Search for Input
searchUser.addEventListener('keyup', (e) => {  // Search Input Event Listener
  const userText = e.target.value; // Get input text
  if(userText !== ''){
    // Make HTTP call
    gitHub.getUser(userText).then(data => {
      if(data.profile.message === 'Not Found'){
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        ui.showProfile(data.profile);
      }
    })
  } else {
    ui.clearProfile();
  }
});