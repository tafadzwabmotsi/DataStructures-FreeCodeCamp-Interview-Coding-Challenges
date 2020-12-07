class Set {
    constructor() {
        // Dictionary will hold the items of our set
        this.dictionary = {};
        this.length = 0;
    }

    // This method will check for the presence of an element and return true or false
    has(element) {
        return this.dictionary[element] !== undefined;
    }

    // This method will return all the values in the set
    values() {
        return Object.keys(this.dictionary);
    }

    // add an element to the collection
    add(element) {
        let isAdded = false;

        // make sure no duplicates are added
        if (!this.has(element)) {
            this.dictionary[element] = element;
            this.length++;

            isAdded = true;
        }
        return isAdded;
    }

    // remove an element from the collection
    remove(element) {
        let isRemoved = false;

        // make sure to remove only elements that exist
        if (this.has(element)) {
            delete this.dictionary[element];
            this.length--;

            isRemoved = true;
        }

        return isRemoved;
    }

    // get the size of the collection
    size() {
        return this.length;
    }
}






