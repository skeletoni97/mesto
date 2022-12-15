export default class UserInfo {
  constructor({ profileName, profileStatus, profileAvatarSelector }) {
    (this._profileName = profileName), 
    (this._profileStatus = profileStatus);
    (this._avatar = profileAvatarSelector);
  }

  getUserInfo() {
    const userObject = {
      about: this._profileStatus.textContent,
      name: this._profileName.textContent,
      
    };
    return userObject;
  }

  setUserInfo(name, about, avatar) {
    this._profileName.textContent = name;
    this._profileStatus.textContent = about;
    this._avatar.src = avatar;
  }
}
