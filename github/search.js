class Github {
  constructor(){
    this.client_id = 'f56f9fa2486f3668d5d2';
    this.client_secret = 'f818a5c2129bda11c3178b4220b70e4184ba8600';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
    return {
      profile
    }
  }
}