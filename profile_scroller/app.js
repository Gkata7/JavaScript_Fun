const data = [
  {
    name: 'John Doe',
    age: 29,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'San Francisco CA',
    image: 'https://randomuser.me/api/portraits/men/88.jpg'
  },
  {
    name: 'Kayla Dee',
    age: 25,
    gender: 'Female',
    lookingFor: 'Male',
    location: 'San Jose CA',
    image: 'https://randomuser.me/api/portraits/women/81.jpg'
  },
  {
    name: 'Tyler Doe',
    age: 30,
    gender: 'Male',
    lookingFor: 'Female',
    location: 'San Francisco CA',
    image: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
];

const profiles = profileIterator(data);
nextProfile();
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingFor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
  `;
  document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
  } else {
    window.location.reload();
  }
}

function profileIterator(profiles){
  let nextIndex = 0;
  return {
    next: function(){
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done: false} :
      {done: true}
    }
  };
}