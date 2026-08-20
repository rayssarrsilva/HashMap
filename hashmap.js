import { hash } from "./hash.js";

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

    #hash(key) {
        return hash(key, this.capacity);
    }

    #checkIndex(index) {
        if (index < 0 || index >= this.buckets.length) {
        throw new Error('Trying to access index out of bounds');
        }
    }

    #findEntry(bucket, key) {
        return bucket.find((entry) => entry[0] === key);
    }
    
    #grow() {
        const oldEntries = this.entries();
    
        this.capacity *= 2;
        this.buckets = this.#createBuckets(this.capacity);
        this.size = 0;
    
        for (const [key, value] of oldEntries) {
            this.set(key, value);
        }
    }

    entries() {
        return this.buckets.flat();
    }

    set(key, value) {
        const index = this.#hash(key);
        this.#checkIndex(index);
        const bucket = this.buckets[index];
    
        const existingEntry = this.#findEntry(bucket, key);
        if (existingEntry) {
        existingEntry[1] = value; 
        return;
        }
    
        bucket.push([key, value]);
        this.size++;
    
        if (this.size / this.capacity > this.loadFactor) {
        this.#grow();
        }
    }

    get(key) {
        const index = this.#hash(key);
        this.#checkIndex(index);
        const entry = this.#findEntry(this.buckets[index], key);
        return entry ? entry[1] : null;
    }
    
    has(key) {
        const index = this.#hash(key);
        this.#checkIndex(index);
        return this.#findEntry(this.buckets[index], key) !== undefined;
    }

    remove(key) {
        const index = this.#hash(key);
        this.#checkIndex(index);
        const bucket = this.buckets[index];
        const entryIndex = bucket.findIndex((entry) => entry[0] === key);
    
        if (entryIndex === -1) return false;
    
        bucket.splice(entryIndex, 1);
        this.size--;
        return true;
    }

    length() {
        return this.size;
    }

    clear() {
        this.buckets = this.#createBuckets(this.capacity);
        this.size = 0;
    }

    keys() {
        return this.entries().map(([key]) => key);
    }
    
    values() {
        return this.entries().map(([, value]) => value);
    }
}

export default HashMap;