/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers');

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);

    if (bucket === undefined) {
      this.storage.set(index, [[key, value]]);
    } else {
      bucket.forEach((pair) => {
        if (pair[0] === key) {
          pair[1] = value;
          return;
        }
      });
      bucket.push([key, value]);
    }
  }

  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    bucket.forEach((pair) => {
      if (pair[0] === key) {
        bucket.splice(pair, 1);
      }
    });
    return undefined;
  }

  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    const index = getIndexBelowMax(key, this.limit);
    const bucket = this.storage.get(index);
    if (bucket === undefined) {
      return undefined;
    }
    for (let i = 0; i < bucket.length; ++i) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined;
  }
}

module.exports = HashTable;
