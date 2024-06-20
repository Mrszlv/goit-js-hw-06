class Storage {
    #items;
    constructor(newArray) {
        this.#items = newArray; 
    }

    getItems() {
        return this.#items;
    }
    
    addItem(newItem) {
this.#items.push(newItem)
    }
    
    removeItem(itemToRemove) {
        const deleteItem = this.#items.indexOf(itemToRemove)
        if (deleteItem !== -1) {
            this.#items.splice(deleteItem, 1)
        }
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
