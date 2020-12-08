var Map = function () {
    this.collection = {};

    // this method adds a key value pair to the map
    this.add = (key, value) => {
        if (!this.has(key)) {
            this.collection[key] = value;
        }
    }

    // this method removes an element from the map
    this.remove = (key) => {
        if (this.has(key)) {
            delete this.collection[key];
        }
    }

    // this methods gets the valuie of the given key
    this.get = (key) => {
        if (this.has(key)) {
            return this.collection[key];
        }

        return undefined;
    }

    // this method checks the existence of the given key
    this.has = (key) => {
        return this.collection[key] !== undefined;
    }

    // this method returns an array of values in the map
    this.values = () => {
        return Object.values(this.collection);
    }

    // this method finds the number of elements in the map
    this.size = () => {
        return Object.keys(this.collection).length;
    }

    // this method deletes all the elements in the map
    this.clear = () => {
        while (this.size()) {
            delete this.collection[Object.keys(this.collection)[0]];
        }
    }
};
