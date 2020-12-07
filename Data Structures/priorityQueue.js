function PriorityQueue() {
    this.collection = [];

    // print the priority queue
    this.printCollection = function () {
        console.log(this.collection);
    };

    // push item to the priority queue
    this.enqueue = function (element) {
        let name, priorityIndex;

        if (this.size() > 0) {

            name = element[0];
            priorityIndex = element[1];

            let insertIndex = priorityIndex;

            for (let index = 0; index < this.collection.length; index++) {
                if (this.collection[index][1] > priorityIndex) {
                    insertIndex = 0;
                }
            }

            this.collection.splice(insertIndex, 0, [name, priorityIndex]);
        }

        else {
            this.collection.push(element);
        }


    };

    // remove and return the most prioritized element
    this.dequeue = function () {
        // return just the name
        if (!this.isEmpty()) {
            return this.collection.splice(0, 1)[0][0];
        }
    };

    // get the size of the queue
    this.size = function () {
        return this.collection.length;
    }

    // get the element in the front of the priority queue
    this.front = function () {
        return this.collection[0][0];
    };

    // check if the priority queue id empty
    this.isEmpty = function () {
        return (this.collection.length == 0);
    };

}


