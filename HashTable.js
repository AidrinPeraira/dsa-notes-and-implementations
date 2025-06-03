/**
 * Hash table
 *
 * need to have the following
 * - set
 * - get
 * - remove
 * - Hashing function
 *  - If the hashing function gives the same index for multiple keys, ('name' vs 'mane')
 * it will cause the loss of data. this is called COLLISON.
 *  - this is handled in various ways
 */

//Basic Implementation

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    //we are supposed to use complex functions that give unique and different keys.
    // lets use a simeple one just to understand the principle

    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);

    const bucket = this.table[index]; //common convention to call it bucket.

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((v) => v[0] == key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    let index = this.hash(key);
   
    const bucket = this.table[index]

    if(bucket){
        const sameKeyItem = bucket.find(item => item[0] == key)
        if(sameKeyItem){
            return sameKeyItem[1]
        }
    }
    return undefined
  }

  remove(key) {
    let index = this.hash(key);
    
    const bucket = this.table[index]

    if(bucket){
        const sameKeyItem = bucket.find( item => item[0]==key)
        if(sameKeyItem){
            bucket.splice(bucket.indexOf(sameKeyItem, 1))
        }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, " -> ", this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 25);

table.display();

console.log(table.get("name"));

table.remove("name");
table.display();
