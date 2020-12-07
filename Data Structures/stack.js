function Stack() {
    var collection = [];

    // print stack
    this.print = function () {
        console.log(collection);
    };

    //  push to the stack
    this.push = function (element) {
        collection.push(element);
    };

    // pop from the stack
    this.pop = function () {
        return collection.pop();
    };

    // get top of the stack
    this.peek = function () {
        return collection[collection.length - 1];
    }

    // check if the stack is empty
    this.isEmpty = function () {
        return (collection.length == 0);
    };

    // remove all elements from the stack
    this.clear = function () {
        while (collection.length) { collection.pop() };
    };
}
