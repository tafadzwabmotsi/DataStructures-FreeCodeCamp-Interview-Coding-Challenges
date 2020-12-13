var called = 0;

var hash = string => {
    called++;
    var hashed = 0;
    for (var i = 0; i < string.length; i++) {
        hashed += string.charCodeAt(i);
    }
    return hashed;
};

var HashTable = function () {
    this.collection = {};

    // this method adds an object to the hash map
    this.add = (key, value) => {
        const hashIndex = hash(key);

        if (this.collection[hashIndex] === undefined) {
            this.collection[hashIndex] = {};
        }

        this.collection[hashIndex][key] = value;
    }

    // this method removes an object with the given key from the
    // hash map 
    this.remove = key => {
        const hashIndex = hash(key);
        if (this.collection[hashIndex][key] !== undefined) {
            delete this.collection[hashIndex][key];
        }

        if (!Object.keys(this.collection[hashIndex]).length) {
            delete this.collection[hashIndex];
        }
    }

    // this method finds and return the value of the given key
    // from the hash map
    this.lookup = key => {
        const hashIndex = hash(key);
        if (this.collection[hashIndex][key] !== undefined) {
            return this.collection[hashIndex][key];
        }

        return null;
    }
};
