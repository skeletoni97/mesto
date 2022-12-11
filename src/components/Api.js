class Api {
    constructor({baseUrl, headers}) {
      this._headers = headers;
      this._baseUrl = baseUrl
    //   this._id = id

    }
   

    getProfile(){
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch()
      
    }
  
    getCard() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }

    
    editProfile(name, about) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify(
                name,
                about
              )
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        .catch(console.log)
    }
    addCard(name, link, _id) {
        console.log(_id, 'name')
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify(
                name,
                link
              )
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        
        
        .catch(console.log)
    }
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`, {
            method: "DELETE",
            headers: this._headers,
        })
        .then(res => res.ok ? res.json() : Promise.reject(res.status))
        
        
        .catch(console.log)
    }
  
    // другие методы работы с API
  }
  
  export const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
    headers: {
      authorization: 'b6432c9a-482f-46d7-8322-c17332f1f269',
      'Content-Type': 'application/json'
    }
  }); 