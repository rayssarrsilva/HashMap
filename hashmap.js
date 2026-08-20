class HashMap {
    constructor(loadFactor = 0.75, capacity = 16){
        this.loadFactor = loadFactor;
        this.capacity = capacity;
        this.buckets = this.#createBuckets(this.capacity);
        this.size = 0;
    }

    #createBuckets(capacity){
        return Array.from({length: capacity}, () => []);
    }
}