export default class UserInfo {
  constructor( userInfoConfig ) {
    this._profileName = document.querySelector(userInfoConfig.nameSelector);
    this._profileStatus = document.querySelector(userInfoConfig.aboutSelector);
    this._avatar = document.querySelector(userInfoConfig.avatarSelector);
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
