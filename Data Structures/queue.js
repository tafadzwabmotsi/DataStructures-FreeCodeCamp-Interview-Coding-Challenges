function Queue() {
    var collection = [];

    // print the queue
    this.print = function () {
        console.log(collection);
    };

    // push an element to the back of the queue
    this.enqueue = function (element) {
        collection.push(element);
    };

    // remove and return the element on the front of the queue
    this.dequeue = function () {
        return collection.shift();
    };

    // get the element in the front of the queue
    this.front = function () {
        return collection[0];
    };

    // get the size of the queue
    this.size = function () {
        return collection.length;
    };

    // check if the queue is empty
    this.isEmpty = function () {
        return (collection.length == 0);
    };
}
