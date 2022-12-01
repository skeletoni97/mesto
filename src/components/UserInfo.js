export default class UserInfo {
  constructor({ profileName, profileStatus }) {
    (this._profileName = profileName), (this._profileStatus = profileStatus);
  }

  getUserInfo() {
    const userObject = {
      status: this._profileStatus.textContent,
      name: this._profileName.textContent,
    };
    return userObject;
  }

  setUserInfo({ name, status }) {
    this._profileName.textContent = name;
    this._profileStatus.textContent = status;
  }
}
