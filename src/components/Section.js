export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._items = items,
        this._renderer = renderer,
        this._containerSelector = containerSelector

    }
    renderer() {
        this._items.forEach((item) => {
           this._renderer(item)
          });

    }

    addItem(card) {
        this._containerSelector.append(card)
    //     if(this._owner === this._userID) {
    //         this._containerSelector.append(card)
    //     } else {
    //         this._containerSelector.prepend(card)
    //     }
     }
    }     
