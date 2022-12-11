export default class UserInfo {
  constructor({ profileName, profileStatus }) {
    (this._profileName = profileName), (this._profileStatus = profileStatus);
  }

  getUserInfo() {
    const userObject = {
      about: this._profileStatus.textContent,
      name: this._profileName.textContent,
    };
    console.log(userObject)
    return userObject;
  }

  setUserInfo(name, about) {
    this._profileName.textContent = name;
    this._profileStatus.textContent = about ;
    console.log('rev')
  }
}
