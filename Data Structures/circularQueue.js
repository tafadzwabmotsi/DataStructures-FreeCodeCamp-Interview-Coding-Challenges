class CircularQueue {

    // initialize the queue
    constructor(size) {

        this.queue = [];
        this.read = 0;
        this.write = 0;
        this.max = size - 1;

        while (size > 0) {
            this.queue.push(null);
            size--;
        }
    }

    // get the queue for printing
    print() {
        return this.queue;
    }

    // push in item into the queue
    enqueue(item) {

        // be sure not to overwrite data
        if (this.queue[this.write] === null) {
            this.queue[this.write] = item;

            //advance write circularly
            this.write = (this.write + 1) % (this.max + 1);

            return item;
        }

        return null;
    }

    //remove elements from the queue
    dequeue() {

        // be sure not to go past write
        if (this.queue[this.read] !== null) {
            const dequeued = this.queue[this.read];
            this.queue[this.read] = null;

            //advance read circularly
            this.read = (this.read + 1) % (this.max + 1);

            return dequeued;

        }

        return null;
    }
}

