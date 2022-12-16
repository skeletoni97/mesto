export default class Section {
    constructor({ renderer }, containerSelector) {
      
        this._renderer = renderer,
        this._containerSelector = containerSelector

    }
    renderItems(items) {
        items.forEach((item) => {
           this._renderer(item)
          });

    }

    addListItem(card) {
        this._containerSelector.append(card)
     }

    addNewItem(card) {
        this._containerSelector.prepend(card)
     }
    }     
