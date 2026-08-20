import HashMap from './HashMap.js';

class HashSet {
    constructor(loadFactor = 0.75, capacity = 16){
        this.map = new HashMap(loadFactor, capacity);
    }
}